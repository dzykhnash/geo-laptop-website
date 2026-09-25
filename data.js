const GEO_DATA = {
  site: {
    name: "GEO Laptop Sinh Viên",
    url: "https://YOUR-DOMAIN.com/",
    description: "Website demo tối ưu GEO về laptop gaming cho sinh viên CNTT."
  },

  posts: [
    {
      slug: "laptop-gaming-cho-sinh-vien-cntt",
      title: "Laptop gaming có phù hợp cho sinh viên CNTT không?",
      category: "Informational",
      date: "2026-09-25",
      readTime: "5 phút",
      excerpt: "Phân tích các tiêu chí phần cứng và trải nghiệm cần cân nhắc khi sinh viên CNTT chọn laptop gaming.",
      keywords: ["laptop gaming", "sinh viên CNTT", "laptop học IT", "lập trình"],
      content: `
        <p><strong>Có.</strong> Laptop gaming có thể đáp ứng các nhu cầu học tập CNTT như lập trình, sử dụng IDE, chạy nhiều ứng dụng, máy ảo và chơi game. Tuy nhiên, lựa chọn phù hợp còn phụ thuộc vào ngân sách, khả năng di chuyển và tác vụ thực tế.</p>

        <h2>Những yếu tố nên quan tâm</h2>
        <ul>
          <li><strong>CPU:</strong> ưu tiên bộ xử lý có hiệu năng tốt nếu thường xuyên biên dịch hoặc chạy nhiều tác vụ.</li>
          <li><strong>RAM:</strong> 16GB là mức tham khảo phù hợp cho nhiều nhu cầu; 32GB hữu ích khi chạy nhiều ứng dụng hoặc máy ảo đồng thời.</li>
          <li><strong>SSD:</strong> 512GB trở lên giúp có không gian cho hệ điều hành, IDE và dự án.</li>
          <li><strong>GPU:</strong> GPU rời đáng cân nhắc nếu có nhu cầu gaming, đồ họa hoặc tác vụ cần GPU.</li>
          <li><strong>Màn hình:</strong> nên chọn độ phân giải và tần số quét phù hợp với cách sử dụng.</li>
        </ul>

        <h2>Bảng tiêu chí tham khảo</h2>
        <div class="table-wrap"><table class="data-table">
          <thead><tr><th>Tiêu chí</th><th>Mức tham khảo</th><th>Lý do</th></tr></thead>
          <tbody>
            <tr><td>CPU</td><td>Hiệu năng tốt</td><td>Biên dịch và đa nhiệm</td></tr>
            <tr><td>RAM</td><td>16GB trở lên</td><td>IDE, trình duyệt, ứng dụng</td></tr>
            <tr><td>SSD</td><td>512GB trở lên</td><td>Phần mềm và dự án</td></tr>
            <tr><td>GPU</td><td>GPU rời nếu cần</td><td>Gaming/đồ họa/GPU</td></tr>
          </tbody>
        </table></div>

        <h2>Kết luận</h2>
        <p>Laptop gaming là một lựa chọn có thể phù hợp với sinh viên CNTT nếu người dùng ưu tiên hiệu năng và chấp nhận trọng lượng, kích thước hoặc thời lượng pin có thể khác laptop văn phòng.</p>
      `
    },
    {
      slug: "cach-chon-laptop-lap-trinh",
      title: "Cách chọn laptop cho lập trình sinh viên",
      category: "Consideration",
      date: "2026-09-25",
      readTime: "6 phút",
      excerpt: "Checklist CPU, RAM, SSD, màn hình và khả năng nâng cấp cho nhu cầu lập trình.",
      keywords: ["lập trình", "RAM", "SSD", "CPU", "sinh viên"],
      content: `
        <p>Khi chọn laptop cho lập trình, nên bắt đầu từ phần mềm và workflow thực tế thay vì chỉ nhìn một thông số đơn lẻ. IDE, trình duyệt, database, Docker và máy ảo có thể cùng sử dụng tài nguyên.</p>

        <h2>Checklist nhanh</h2>
        <ol>
          <li>Xác định có chạy máy ảo, Docker hoặc công cụ nặng hay không.</li>
          <li>Chọn RAM đủ cho số ứng dụng chạy đồng thời.</li>
          <li>Ưu tiên SSD để thao tác với hệ điều hành và project nhanh hơn.</li>
          <li>Kiểm tra khả năng nâng cấp RAM/SSD nếu dự định dùng lâu dài.</li>
          <li>Kiểm tra bàn phím, màn hình và trọng lượng nếu phải mang máy đi học.</li>
        </ol>

        <h2>RAM 16GB hay 32GB?</h2>
        <p>16GB là mức tham khảo cho nhiều workflow lập trình phổ biến. 32GB có lợi khi thường xuyên chạy nhiều ứng dụng nặng, nhiều container hoặc máy ảo cùng lúc.</p>

        <h2>GPU có bắt buộc không?</h2>
        <p>Không. Nếu mục tiêu chính là lập trình web, backend hoặc các tác vụ CPU thông thường thì GPU rời không phải yêu cầu bắt buộc. GPU trở nên đáng chú ý hơn khi có gaming, đồ họa hoặc workload sử dụng GPU.</p>
      `
    },
    {
      slug: "ram-16gb-hay-32gb",
      title: "RAM 16GB hay 32GB cho sinh viên CNTT?",
      category: "Comparison",
      date: "2026-09-25",
      readTime: "4 phút",
      excerpt: "So sánh theo workflow thay vì chỉ nhìn dung lượng RAM.",
      keywords: ["RAM 16GB", "RAM 32GB", "laptop IT", "máy ảo"],
      content: `
        <p>Không có một mức RAM phù hợp cho mọi sinh viên. Cách chọn nên dựa vào số lượng ứng dụng và workload bạn thường chạy đồng thời.</p>

        <div class="table-wrap"><table class="data-table">
          <thead><tr><th>RAM</th><th>Phù hợp</th><th>Khi nào nên cân nhắc</th></tr></thead>
          <tbody>
            <tr><td>16GB</td><td>Lập trình, IDE, trình duyệt, công cụ học tập</td><td>Phần lớn workflow phổ biến</td></tr>
            <tr><td>32GB</td><td>Đa nhiệm nặng, máy ảo, nhiều container</td><td>Khi thường xuyên thiếu RAM</td></tr>
          </tbody>
        </table></div>

        <h2>Cách ra quyết định</h2>
        <ul>
          <li>Nếu chủ yếu lập trình và học tập: 16GB là điểm bắt đầu hợp lý.</li>
          <li>Nếu chạy nhiều máy ảo/container hoặc phần mềm nặng: cân nhắc 32GB.</li>
          <li>Nếu máy cho phép nâng cấp: có thể bắt đầu thấp hơn và nâng cấp sau khi xác định nhu cầu.</li>
        </ul>
      `
    },
    {
      slug: "rtx-4050-cho-sinh-vien",
      title: "GPU RTX 4050 có cần thiết cho sinh viên CNTT không?",
      category: "Consideration",
      date: "2026-09-25",
      readTime: "5 phút",
      excerpt: "Khi nào GPU rời thực sự có ích và khi nào có thể ưu tiên CPU, RAM hoặc tính cơ động.",
      keywords: ["RTX 4050", "GPU", "laptop gaming", "AI"],
      content: `
        <p>GPU rời không phải yêu cầu bắt buộc đối với mọi sinh viên CNTT. Giá trị của GPU phụ thuộc vào workload.</p>

        <h2>GPU rời hữu ích khi</h2>
        <ul>
          <li>Chơi game thường xuyên.</li>
          <li>Làm đồ họa hoặc dựng nội dung có dùng GPU.</li>
          <li>Học hoặc thử nghiệm workload có sử dụng GPU.</li>
        </ul>

        <h2>Có thể ưu tiên yếu tố khác khi</h2>
        <ul>
          <li>Chủ yếu lập trình web/backend.</li>
          <li>Ưu tiên máy nhẹ và thời lượng pin.</li>
          <li>Ngân sách cần dành cho RAM, SSD hoặc CPU.</li>
        </ul>

        <p><strong>Lưu ý:</strong> tên GPU không đủ để đánh giá toàn bộ laptop. Cần xem cả CPU, RAM, giới hạn công suất, hệ thống tản nhiệt, màn hình và khả năng nâng cấp.</p>
      `
    },
    {
      slug: "laptop-gaming-vs-laptop-van-phong",
      title: "Laptop gaming và laptop văn phòng: khác nhau ở đâu?",
      category: "Comparison",
      date: "2026-09-25",
      readTime: "5 phút",
      excerpt: "So sánh theo hiệu năng, tính cơ động, GPU và nhu cầu sử dụng.",
      keywords: ["laptop gaming", "laptop văn phòng", "so sánh laptop"],
      content: `
        <p>Laptop gaming và laptop văn phòng được thiết kế với các ưu tiên khác nhau. Vì vậy nên so sánh theo nhu cầu thay vì coi một loại luôn tốt hơn loại còn lại.</p>

        <div class="table-wrap"><table class="data-table">
          <thead><tr><th>Tiêu chí</th><th>Laptop gaming</th><th>Laptop văn phòng</th></tr></thead>
          <tbody>
            <tr><td>Hiệu năng tải cao</td><td>Thường được ưu tiên</td><td>Thường cân bằng hơn</td></tr>
            <tr><td>GPU rời</td><td>Phổ biến ở nhiều mẫu</td><td>Không phải ưu tiên chính</td></tr>
            <tr><td>Tính cơ động</td><td>Có thể nặng hơn</td><td>Thường ưu tiên gọn nhẹ</td></tr>
            <tr><td>Gaming</td><td>Phù hợp hơn</td><td>Tùy cấu hình</td></tr>
          </tbody>
        </table></div>

        <p>Nếu nhu cầu chính là lập trình, văn phòng và di chuyển nhiều, tính cơ động có thể quan trọng. Nếu cần gaming hoặc workload nặng, hiệu năng và khả năng tản nhiệt có thể được ưu tiên.</p>
      `
    }
  ],

  products: [
    {
      slug: "predator-helios-neo-16-demo",
      name: "Acer Predator Helios Neo 16 (Demo)",
      brand: "Acer",
      description: "Dữ liệu minh họa cho bài tập GEO về laptop gaming.",
      price: "22990000",
      currency: "VND",
      availability: "InStock",
      specs: [
        ["CPU", "Hiệu năng cao"],
        ["RAM", "16GB"],
        ["SSD", "512GB"],
        ["GPU", "RTX 4050 (demo)"],
        ["Màn hình", "16 inch"]
      ]
    },
    {
      slug: "laptop-gaming-demo-02",
      name: "Laptop Gaming Sinh Viên – Mẫu Demo 02",
      brand: "Demo Brand",
      description: "Mẫu sản phẩm giả lập để kiểm tra khả năng AI trích xuất dữ liệu.",
      price: "19990000",
      currency: "VND",
      availability: "InStock",
      specs: [
        ["CPU", "Hiệu năng tốt"],
        ["RAM", "16GB"],
        ["SSD", "512GB"],
        ["GPU", "GPU rời"],
        ["Màn hình", "15.6 inch"]
      ]
    },
    {
      slug: "laptop-gaming-demo-03",
      name: "Laptop Gaming Sinh Viên – Mẫu Demo 03",
      brand: "Demo Brand",
      description: "Mẫu sản phẩm giả lập có dữ liệu Schema.org đầy đủ.",
      price: "24990000",
      currency: "VND",
      availability: "InStock",
      specs: [
        ["CPU", "Hiệu năng cao"],
        ["RAM", "32GB"],
        ["SSD", "1TB"],
        ["GPU", "GPU rời"],
        ["Màn hình", "16 inch"]
      ]
    }
  ],

  faq: [
    {
      question: "Laptop gaming có phù hợp cho sinh viên CNTT không?",
      answer: "Có. Laptop gaming có thể đáp ứng lập trình, sử dụng IDE, chạy nhiều ứng dụng, máy ảo và chơi game. Cần cân nhắc thêm trọng lượng, thời lượng pin và khả năng nâng cấp."
    },
    {
      question: "Sinh viên CNTT nên chọn RAM bao nhiêu?",
      answer: "16GB là mức tham khảo phù hợp cho nhiều nhu cầu lập trình. 32GB hữu ích khi thường xuyên chạy nhiều ứng dụng nặng, máy ảo hoặc container cùng lúc."
    },
    {
      question: "Laptop lập trình có bắt buộc phải có GPU rời không?",
      answer: "Không. GPU rời chủ yếu hữu ích khi có nhu cầu gaming, đồ họa hoặc workload sử dụng GPU."
    },
    {
      question: "Laptop gaming hay laptop văn phòng tốt hơn cho sinh viên?",
      answer: "Không có câu trả lời chung. Laptop gaming thường ưu tiên hiệu năng và GPU; laptop văn phòng thường ưu tiên tính cơ động. Nên chọn theo workflow và nhu cầu."
    },
    {
      question: "SSD 512GB có đủ cho sinh viên CNTT không?",
      answer: "512GB là mức tham khảo có thể đáp ứng hệ điều hành, IDE và nhiều project. Người dùng lưu nhiều game, máy ảo hoặc dữ liệu lớn có thể cần dung lượng cao hơn."
    },
    {
      question: "Có nên mua laptop có khả năng nâng cấp RAM và SSD?",
      answer: "Khả năng nâng cấp giúp dễ mở rộng cấu hình khi nhu cầu tăng. Trước khi mua cần kiểm tra chính xác giới hạn RAM, số khe và loại SSD của từng model."
    }
  ]
};
