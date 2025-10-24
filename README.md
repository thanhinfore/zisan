# zisan

Ứng dụng web gia phả cá nhân hoạt động hoàn toàn trên trình duyệt. Dữ liệu được lưu trong IndexedDB của máy người dùng và không cần máy chủ.

## Phiên bản 11.1 - Logic thông minh và "This is me" 🌟

### 🎯 Giới tính (Gender)
- **Gender field**: Thêm trường giới tính (Nam/Nữ/Khác) cho mỗi thành viên
- **Gender icons**: Hiển thị icon giới tính đẹp mắt trên cây gia phả
- **Smart parent detection**: Tự động xác định cha/mẹ dựa trên giới tính

### ⭐ "This is me" Feature
- **Mark as me**: Đánh dấu bản thân trong cây gia phả
- **Special highlighting**: Node "Tôi" được highlight với border vàng đặc biệt
- **Me badge**: Badge "Tôi" hiển thị rõ ràng
- **Auto center**: Tự động đặt làm trung tâm khi mark
- **Persistent**: Lưu trong localStorage, giữ nguyên sau khi reload

### 🧠 Logic thêm thành viên thông minh
- **Add child - Smart detection**:
  - Nếu cha có giới tính Nam + có vợ → Tự động set cả cha và mẹ
  - Nếu mẹ có giới tính Nữ + có chồng → Tự động set cả mẹ và cha
  - Không cần hỏi "bạn là cha hay mẹ" nữa!
- **Add sibling**:
  - Tự động copy cha và mẹ từ anh/chị/em
  - Không cần nhập lại thông tin cha mẹ
- **Add spouse**:
  - Tự động link bidirectional (cả 2 người đều có spouse)
- **Add father/mother**:
  - Tự động update cả siblings (anh chị em cùng cha mẹ)
- **Context messages**: Hiển thị message rõ ràng "Đang thêm con của {name}"

### 🎨 UI/UX Improvements
- **Gender-specific colors**: Nam (xanh), Nữ (hồng), Khác (cam)
- **Better action modal**: Thêm icons cho các action
- **Add sibling button**: Button mới để thêm anh/chị/em
- **Dynamic button text**: "Mark as me" ↔ "Unmark" tự động đổi

### 🔧 Technical
- **Bidirectional spouse linking**: Khi thêm vợ/chồng, cả 2 đều được link
- **Sibling cascade update**: Update cha/mẹ cho tất cả anh chị em khi add parent
- **Gender-aware logic**: Sử dụng gender để improve UX

## Phiên bản 11.0 - Ổn định và Trải nghiệm hoàn hảo ✨

### 🔧 Sửa lỗi quan trọng
- **Transaction completion fix**: Đợi transaction hoàn tất trước khi cập nhật UI
- **Tree update fix**: Cây gia phả giờ đây cập nhật ngay lập tức sau khi thêm/sửa/xóa thành viên
- **Promise-based operations**: Tất cả database operations sử dụng Promise đúng cách

### ⚡ Loading Experience
- **Loading overlay**: Hiển thị loading khi lưu/xóa thành viên
- **Better feedback**: Người dùng luôn biết hệ thống đang xử lý
- **Smooth transitions**: Chuyển đổi mượt mà giữa các trạng thái

### ✅ Form Validation nâng cao
- **Name length validation**: Tên phải có ít nhất 2 ký tự
- **Birth date validation**: Không cho phép ngày sinh trong tương lai
- **Duplicate name check**: Cảnh báo khi tên đã tồn tại (v11 feature)
- **Real-time feedback**: Toast notifications thay vì alerts

### 🎨 UX Improvements
- **Confirmation dialogs**: Xác nhận trước khi xóa thành viên
- **Success/Error messages**: Thông báo rõ ràng cho mọi thao tác
- **Toast instead of alert**: Sử dụng toast cho tất cả thông báo
- **Better error handling**: Xử lý lỗi toàn diện với try-catch

### 🚀 Performance
- **Optimized database queries**: Giảm số lần truy vấn database
- **Efficient rendering**: Chỉ render lại khi cần thiết
- **Memory management**: Quản lý memory tốt hơn với finally blocks

## Phiên bản 10.0 - Công cụ chuyên nghiệp 🚀

### ↩️ Undo/Redo
- **Hoàn tác/Làm lại**: Lịch sử thay đổi lên đến 50 actions
- **Floating bar**: Thanh nổi ở góc màn hình, luôn sẵn sàng
- **Keyboard shortcuts**: Ctrl+Z (Undo), Ctrl+Y (Redo)
- **Action history**: Hiển thị hành động vừa thực hiện

### 🎯 Drag & Drop Upload
- **Kéo thả file**: Chỉ cần kéo file vào vùng drop zone
- **Multi-format**: Hỗ trợ JSON, CSV, Backup
- **Visual feedback**: Hiệu ứng đẹp mắt khi drag over
- **Auto-detect format**: Tự động nhận diện và xử lý

### 🎂 Birthday Reminders
- **Upcoming birthdays**: Top 5 sinh nhật sắp tới
- **Today highlight**: Đánh dấu sinh nhật hôm nay đặc biệt
- **Days countdown**: Đếm ngược số ngày còn lại
- **Age calculation**: Tự động tính tuổi sẽ đến
- **Click to view**: Click để xem chi tiết member

### 🔗 Relationship Calculator
- **Tính mối quan hệ**: Tìm mối quan hệ giữa 2 người bất kỳ
- **Parent/Child detection**: Nhận diện cha/mẹ - con
- **Sibling detection**: Nhận diện anh chị em
- **Spouse detection**: Nhận diện vợ/chồng
- **Beautiful result**: Hiển thị kết quả gradient đẹp mắt

### 🔍 Advanced Search
- **Name search**: Tìm theo tên
- **Date range**: Lọc theo khoảng ngày sinh
- **Generation filter**: Lọc theo thế hệ
- **Grid results**: Kết quả hiển thị dạng grid
- **Click to edit**: Click để xem/sửa ngay

### 📊 Excel Export
- **CSV export**: Xuất dữ liệu sang Excel-compatible CSV
- **UTF-8 BOM**: Hỗ trợ tiếng Việt hoàn hảo
- **Date filename**: Tên file tự động có ngày tháng
- **Easy editing**: Mở trong Excel/Google Sheets

### 💾 Auto Backup
- **Daily backup**: Tự động sao lưu hàng ngày
- **Enable/Disable**: Bật/tắt dễ dàng
- **Last backup time**: Hiển thị lần backup cuối
- **Manual backup**: Nút "Sao lưu ngay" cho backup thủ công
- **Background operation**: Chạy nền không làm gián đoạn

### 📱 Progressive Web App (PWA)
- **Install to home**: Cài đặt như app native
- **Offline support**: Hoạt động hoàn toàn offline
- **App icon**: Icon đẹp trên màn hình chính
- **Standalone mode**: Chạy như ứng dụng độc lập

## Phiên bản 9.0 - Trải nghiệm người dùng đỉnh cao ⭐

### Giao diện hiện đại và Dark Mode 🌓
- **Dark Mode**: Chế độ tối bảo vệ mắt với giao diện sang trọng
- **Toast Notifications**: Thông báo mượt mà thay thế alerts
- **Bootstrap Icons**: Hàng trăm icons đẹp mắt
- **Smooth Animations**: Hiệu ứng chuyển động mượt mà
- **Responsive hoàn hảo**: Tối ưu cho cả PC, tablet và mobile

### Cây gia phả tương tác 🌳
- **Zoom In/Out**: Phóng to/thu nhỏ cây gia phả
- **Search box**: Tìm kiếm nhanh với icon đẹp
- **Click & Drag**: Di chuyển cây dễ dàng
- **Visual enhancements**: Hover effects, smooth transitions

### Dòng thời gian 📅
- **Timeline View**: Xem lịch sử gia đình theo thời gian
- **Birth date sorting**: Sắp xếp theo ngày sinh
- **Age calculation**: Tự động tính tuổi
- **Relationship info**: Hiển thị mối quan hệ

### Thống kê nâng cao 📊
- **Stat Cards**: 4 thẻ thống kê với icons đẹp
  - Tổng thành viên
  - Số thế hệ
  - Tuổi trung bình
  - Người lớn tuổi nhất
- **Charts**: Biểu đồ trực quan với Chart.js
  - Phân bố thế hệ (Bar chart)
  - Phân bố độ tuổi (Doughnut chart)

### Profile Photos 📸
- **Upload photos**: Thêm ảnh đại diện cho thành viên
- **Preview**: Xem trước ảnh ngay lập tức
- **Base64 storage**: Lưu trữ an toàn trong database

### Keyboard Shortcuts ⌨️
- **Ctrl+N**: Thêm thành viên mới
- **Ctrl+S**: Lưu thành viên
- **Ctrl+F**: Tìm kiếm
- **Ctrl+E**: Mở trang chia sẻ
- **Ctrl+D**: Bật/tắt dark mode
- **?**: Hiển thị bảng phím tắt

### Form nâng cao 📝
- **Icons in inputs**: Icon đẹp mắt cho mỗi field
- **Notes field**: Thêm ghi chú cho thành viên
- **Photo section**: Upload và preview ảnh
- **Button icons**: Buttons có icons rõ ràng
- **Two-column layout**: Bố cục 2 cột cho form

### Mobile-first Design 📱
- **Touch-friendly**: Buttons và controls lớn hơn
- **Swipe navigation**: Vuốt ngang để chuyển tab
- **Responsive nav**: Navigation thu gọn trên mobile
- **Adaptive layout**: Tự động điều chỉnh layout

### Print Support 🖨️
- **Print-friendly**: In được cây gia phả đẹp
- **Hide UI elements**: Ẩn controls khi in
- **Page breaks**: Ngắt trang hợp lý

### Performance ⚡
- **Smooth transitions**: CSS transitions mượt mà
- **Lazy loading**: Tải dữ liệu khi cần
- **Chart.js optimization**: Charts render nhanh
- **No lag**: Mượt mà ngay cả với nhiều thành viên

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
