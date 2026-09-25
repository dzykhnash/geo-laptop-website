# GEO Laptop Sinh Viên

Website demo phục vụ bài tập "Xây dựng Website tối ưu theo chuẩn GEO (Generative Engine Optimization)".

## Chạy website

Cách nhanh:
1. Mở thư mục bằng VS Code.
2. Cài extension Live Server.
3. Chuột phải `index.html` → `Open with Live Server`.

Hoặc dùng XAMPP:
1. Copy thư mục vào `C:\xampp\htdocs\`.
2. Start Apache.
3. Mở `http://localhost/geo-laptop-website/`.

## Trước khi deploy

Thay toàn bộ:

`https://YOUR-DOMAIN.com/`

bằng domain thật của website trong:
- các file HTML
- `js/data.js`
- `robots.txt`
- `sitemap.xml`

Sau khi deploy, kiểm tra:
- `/robots.txt`
- `/sitemap.xml`
- `/`
- `/posts.html`
- `/products.html`
- `/faq.html`

## Demo AI Search

Dùng các câu hỏi:
1. Theo website này, sinh viên CNTT nên chọn RAM bao nhiêu?
2. Laptop gaming có phù hợp cho sinh viên CNTT không?
3. Khi nào sinh viên cần GPU rời?
4. Website có những tiêu chí nào để chọn laptop lập trình?
5. So sánh laptop gaming và laptop văn phòng theo thông tin trên website.

Lưu ý: ChatGPT/Gemini/Perplexity chỉ có thể truy cập website public khi hệ thống của chúng có khả năng truy cập URL đó. Website local `localhost` không phải URL public để kiểm tra AI Search.

## Nội dung và GEO

Cấu trúc website minh họa:
- Semantic HTML
- Meta description + canonical
- JSON-LD WebSite / Article / Product / FAQPage
- robots.txt
- sitemap.xml
- Internal linking
- Bài viết theo search intent
- FAQ dạng câu hỏi tự nhiên
- Bảng dữ liệu để dễ trích xuất
- Responsive mobile/desktop

Nội dung laptop là dữ liệu minh họa cho bài tập; giá và cấu hình thực tế phải được kiểm chứng trước khi sử dụng thương mại.
