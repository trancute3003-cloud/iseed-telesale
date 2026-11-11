/**
 * iSEED Telesale — máy chủ đồng bộ dữ liệu (Google Apps Script)
 * Dán toàn bộ file này vào Tiện ích mở rộng → Apps Script của Google Sheet, rồi Triển khai → Ứng dụng web.
 * KEY_HASH là mã băm SHA-256 của mật khẩu mở danh sách khách — chỉ ai có mật khẩu mới đọc/ghi được.
 */
var KEY_HASH = 'fd6a4d85b1ce46cc2627f8fa707ebb35eea585355cda8946c9d6f35438c59c7f';
var SHEET_NAME = 'data';

function doGet(e) { return handle_(e.parameter || {}, null); }

function doPost(e) {
  var body = {};
  try { body = JSON.parse(e.postData.contents); } catch (err) {}
  return handle_(e.parameter || {}, body);
}

function handle_(p, body) {
  var key = (body && body.key) || p.key;
  if (key !== KEY_HASH) return out_({ ok: false, error: 'unauthorized' });
  var sh = sheet_();

  if (body && body.action === 'upsert') {
    var lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      var data = sh.getDataRange().getValues();
      var idx = {};
      for (var i = 1; i < data.length; i++) if (data[i][0]) idx[data[i][0]] = i + 1;
      (body.items || []).forEach(function (it) {
        var d = it.data || {};
        var row = [it.id, JSON.stringify(d), new Date(), body.by || '',
                   d.owner || '', d.name || '', d.phone || '', d.status || ''];
        if (idx[it.id]) sh.getRange(idx[it.id], 1, 1, row.length).setValues([row]);
        else { sh.appendRow(row); idx[it.id] = sh.getLastRow(); }
      });
    } finally { lock.releaseLock(); }
    return out_({ ok: true, n: (body.items || []).length });
  }

  var rows = sh.getDataRange().getValues();
  var items = [];
  for (var j = 1; j < rows.length; j++) {
    if (!rows[j][0]) continue;
    try { items.push({ id: rows[j][0], data: JSON.parse(rows[j][1]), at: rows[j][2], by: rows[j][3] }); } catch (err) {}
  }
  return out_({ ok: true, items: items, now: new Date() });
}

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['id', 'json', 'cập nhật', 'người cập nhật', 'owner', 'họ tên', 'SĐT', 'nhãn']);
    sh.setFrozenRows(1);
  }
  return sh;
}

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
