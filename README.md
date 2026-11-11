# iSEED · Kịch bản Telesale — Hội thảo Y tế 24/10

Trang hỗ trợ gọi điện cho nhóm 341 khách đã đăng ký Hội thảo Y tế 24/10/2026 nhưng chưa tham dự.
Nội dung bám theo kịch bản telesale phiên bản 09/11/2026 của Viện iSEED.

## Tính năng
- **Danh sách khách**: dán từ MS Lists / Excel (kèm dòng tiêu đề) hoặc chọn file .xlsx/.csv. Lọc theo nhãn, tìm theo tên/SĐT.
- **Cấp chức vụ**: tự phân loại Cấp cao / Quản lý / Chuyên môn y / Nhân viên / Sinh viên / Chưa rõ theo chức danh; lọc trước khi gọi, bấm vào nhãn cấp để sửa nếu sai.
- **Tổng kết theo ngày** 📊: danh sách khách đã tương tác (theo thứ tự file data gốc), kèm mục Khách cần nhắn Zalo và Khách cần gửi Mail.
- **3 khung luôn hiển thị** bên phải: 3 chuyên đề trọng tâm · Học phí sau học bổng (cá nhân/nhóm) · Giới thiệu Viện iSEED & khoá học.
- **Gọi từng bước**: bấm 📞 Gọi → mỗi bước hiện lời thoại + các nút "Khách phản hồi thế nào?" (quan tâm → bước tiếp; bận → hẹn giờ; không quan tâm → dừng ngay).
- **Tự điền** xưng hô, tên khách, tên người gọi, học phần, câu USP và 2 công cụ theo đề tài khách chọn.
- **Ghi nhận cuối cuộc gọi**: nhãn gợi ý theo mục 9, phiếu 12 mục, tin nhắn Zalo mẫu, "Lưu & gọi khách tiếp theo".
- **Sửa kịch bản** ✏️: bật chế độ sửa → bấm “Sửa” trên khung NÓI. Bản sửa lưu riêng cho Chen / Bảo Trân; có “Khôi phục bản gốc” và “Mã chia sẻ bản sửa” để người kia nhập.
- **Không bắt máy** 📵: đếm số lần; lần 2 tự gắn UND và hiện tin nhắn Zalo mẫu.
- **Tìm nhanh** (phím `/`, gõ không dấu được): tìm câu xử lý từ chối, câu khách hay hỏi.
- **Copy 1 chạm** mọi câu thoại và tin nhắn Zalo mẫu.
- **Đồng hồ cuộc gọi**: vàng khi qua 2 phút, đỏ khi qua 3 phút.
- **Phiếu ghi nhận** 12 mục, lưu trên trình duyệt, copy dán thẳng vào MS Lists / Excel, xuất CSV.

## Đưa lên GitHub Pages
1. Tạo repository mới trên GitHub (ví dụ `iseed-telesale`).
2. **Add file → Upload files**: kéo thả `index.html`, `logo.png`, `favicon.png`, `README.md` → **Commit changes**.
3. Vào **Settings → Pages** → *Source*: **Deploy from a branch** → *Branch*: `main` / `(root)` → **Save**.
4. Sau 1–2 phút, trang có tại `https://<tên-tài-khoản>.github.io/iseed-telesale/`.

> Lưu ý: nếu repository để Public thì ai có link cũng xem được kịch bản nội bộ.
> Dữ liệu phiếu ghi nhận chỉ lưu trên trình duyệt của máy đang dùng, không gửi đi đâu.

## Sửa nội dung
Toàn bộ trong `index.html`. Học phần/USP/công cụ ở mảng `TOPICS`; mục 4b ở `BRIDGE`; xử lý từ chối ở `OBJS`; khách hay hỏi ở `FAQS`.
Trong lời thoại, `{kh}` = xưng hô, `{ten}` = tên khách, `{em}` = tên người gọi, `{hp}` / `{usp}` / `{tools}` / `{detai}` = tự điền theo đề tài.

## Người dùng
- **Chen**, **Bảo Trân**: người gọi — mỗi người thấy khách của mình (cột Owner).
- **Chị Huyền**: quản lý — mục 📈 Báo cáo (tiến độ từng người, lượt gọi 7 ngày, chuyên đề, khách MQL, khách cần gửi mail), xem Danh sách / Tổng kết / phiếu khách của cả nhóm (chỉ xem, không gọi).

## Cài đồng bộ báo cáo (làm 1 lần, ~10 phút)
1. Mở https://sheets.new → đặt tên **iSEED Telesale – Dữ liệu**.
2. **Tiện ích mở rộng → Apps Script** → xoá code mẫu → dán toàn bộ file [`apps-script/Code.gs`](apps-script/Code.gs) → bấm 💾 Lưu.
3. **Triển khai → Tuỳ chọn triển khai mới** → bánh răng ⚙️ chọn **Ứng dụng web**:
   - *Thực thi dưới dạng*: **Tôi**
   - *Người có quyền truy cập*: **Bất kỳ ai**
   → **Triển khai** → **Cấp quyền truy cập** (chọn tài khoản Google → Nâng cao → Đi tới… → Cho phép).
4. Copy **URL ứng dụng web** (dạng `https://script.google.com/macros/s/…/exec`).
5. Trên web: bấm 👤 → **⚙️ Đồng bộ báo cáo** → dán link → nhập mật khẩu → Vào làm việc. (Hoặc gửi link cho Claude để gắn sẵn vào web cho cả nhóm.)

Dữ liệu chỉ đọc/ghi được khi có mật khẩu mở danh sách khách (Apps Script chỉ lưu mã băm của mật khẩu).
