# zisan

Ứng dụng web gia phả cá nhân hoạt động hoàn toàn trên trình duyệt. Dữ liệu được lưu trong IndexedDB của máy người dùng và không cần máy chủ.

## Phiên bản 8.0 - Nâng cấp Bảo mật và Chia sẻ

### Tính năng Bảo mật Nâng cao
- **Thay đổi mật khẩu**: Cho phép thay đổi mật khẩu mã hóa và tự động mã hóa lại toàn bộ dữ liệu
- **Thông tin dữ liệu**: Hiển thị tổng số thành viên, kích thước dữ liệu và trạng thái mã hóa
- **Xóa toàn bộ dữ liệu**: Tính năng xóa sạch dữ liệu với xác nhận an toàn

### Tính năng Xuất/Nhập Nâng cao
- **Xuất JSON mã hóa**: Xuất dữ liệu với mật khẩu bảo vệ để chia sẻ an toàn cho người thân
- **Xuất CSV**: Xuất dữ liệu sang định dạng CSV để dễ dàng xem trong Excel/Google Sheets
- **Sao lưu toàn bộ**: Tạo bản sao lưu đầy đủ bao gồm cả cấu hình mã hóa
- **Khôi phục từ sao lưu**: Khôi phục hoàn toàn dữ liệu từ file backup
- **Nhập file mã hóa**: Tự động nhận diện và giải mã file JSON đã mã hóa khi nhập

### Cải tiến Giao diện
- Tab "Bảo mật" mới với các tùy chọn bảo mật tập trung
- Phân nhóm rõ ràng các chức năng xuất/nhập dữ liệu
- Giao diện responsive tốt hơn cho thiết bị di động

## Phiên bản 7.0

- Tích hợp jQuery và Bootstrap cho giao diện hiện đại
- Biểu mẫu thêm thành viên thông minh hơn với kiểm tra trùng lặp quan hệ
- Bấm thành viên trong cây mở hộp thoại lựa chọn thao tác

## Phiên bản 6.0

- Bấm vào một thành viên trong cây để thêm người mới có quan hệ trực hệ với thiết lập sẵn
- Cải tiến biểu mẫu thêm thành viên chính xác hơn

## Phiên bản 5.1

- Tự làm sạch biểu mẫu khi vào mục thêm thành viên, không cần chọn trong cây
- Nâng cấp phiên bản ứng dụng và sửa lỗi thêm mới

## Phiên bản 5.0

- Sửa lỗi nhập liệu và ngăn chọn bản thân làm quan hệ
- Tự động focus vào ô tên khi thêm mới, trải nghiệm tốt hơn
- Cải thiện hiển thị cây gia phả với đường nối trực quan

## Phiên bản 4.0

- Sửa các lỗi trùng lặp sau khi hợp nhất mã nguồn
- Cải thiện biểu mẫu bằng gợi ý nhập họ tên, thân thiện hơn với người dùng

## Phiên bản 3.0

- Trang chủ với hướng dẫn sử dụng giúp bắt đầu nhanh
- Nút "Thêm mới" và vô hiệu hóa thao tác khi chưa chọn thành viên
- Tự chuyển sang cây và hiển thị thông báo khi chưa có dữ liệu

## Phiên bản 2.0

- Ghi nhớ ngôn ngữ đã chọn giữa các lần sử dụng
- Hiển thị số phiên bản ngay trên giao diện
- Cải thiện xử lý lỗi khi nhập dữ liệu JSON

## Tính năng

### Quản lý Thành viên
- Thêm, sửa, xóa thành viên và liên kết cha mẹ, vợ/chồng
- Xem cây gia phả xoay quanh người dùng, hiển thị bố mẹ, vợ/chồng, con cái và anh chị em
- Tìm kiếm nhanh theo tên
- Biểu mẫu thông minh tránh trùng lặp quan hệ

### Bảo mật Dữ liệu
- Mã hóa AES-GCM 256-bit cho tất cả dữ liệu
- Lưu trữ hoàn toàn trên trình duyệt (IndexedDB)
- Thay đổi mật khẩu bất kỳ lúc nào
- Xóa toàn bộ dữ liệu an toàn

### Xuất/Nhập & Chia sẻ
- Xuất JSON thông thường (không mã hóa)
- Xuất JSON mã hóa với mật khẩu tùy chỉnh
- Xuất CSV để xem trong Excel/Google Sheets
- Sao lưu toàn bộ và khôi phục dữ liệu
- Tạo mã QR để chia sẻ nhanh
- Nhập dữ liệu từ file JSON/CSV

### Giao diện
- Giao diện tab hiện đại, responsive với Bootstrap 5
- Đa ngôn ngữ: Tiếng Việt và English
- Tối ưu cho cả desktop và mobile

## Sử dụng
Mở trực tiếp `index.html` bằng trình duyệt hiện đại (Chrome, Firefox...). Lần đầu sẽ yêu cầu đặt mật khẩu dùng để mã hóa dữ liệu. Ứng dụng hoạt động offline sau lần mở đầu tiên.
