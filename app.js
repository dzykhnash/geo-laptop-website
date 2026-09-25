function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[char]));
}

function renderHeader() {
  const header = document.querySelector("#site-header");
  if (!header) return;
  header.innerHTML = `
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">G</span>
        <span>GEO Laptop Sinh Viên</span>
      </a>
      <nav class="nav">
        <a href="index.html">Trang chủ</a>
        <a href="posts.html">Bài viết</a>
        <a href="products.html">Sản phẩm</a>
        <a href="faq.html">FAQ</a>
        <a href="about.html">GEO</a>
      </nav>
    </div>
  `;
}

function renderFooter() {
  const footer = document.querySelector("#site-footer");
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-inner">
      <div>
        <strong>GEO Laptop Sinh Viên</strong>
        <p>Website demo phục vụ bài tập GEO.</p>
      </div>
      <div class="footer-links">
        <a href="sitemap.xml">Sitemap</a>
        <a href="robots.txt">Robots.txt</a>
        <a href="about.html#geo">Cách tối ưu GEO</a>
      </div>
    </div>
    <div class="footer-bottom">© 2026 GEO Laptop Sinh Viên · Nội dung sản phẩm là dữ liệu minh họa.</div>
  `;
}

function renderPostCard(post) {
  return `
    <article class="content-card">
      <div class="card-meta"><span>${escapeHTML(post.category)}</span><span>${escapeHTML(post.readTime)}</span></div>
      <h3><a href="article.html?slug=${encodeURIComponent(post.slug)}">${escapeHTML(post.title)}</a></h3>
      <p>${escapeHTML(post.excerpt)}</p>
      <div class="tag-row">${(post.keywords || []).slice(0,3).map(k => `<span class="tag">${escapeHTML(k)}</span>`).join("")}</div>
      <a class="text-link" href="article.html?slug=${encodeURIComponent(post.slug)}">Đọc bài →</a>
    </article>
  `;
}

function renderProductCard(product) {
  return `
    <article class="content-card product-card">
      <div class="product-icon">LAPTOP</div>
      <div class="card-meta"><span>${escapeHTML(product.brand)}</span><span>${escapeHTML(product.availability)}</span></div>
      <h3>${escapeHTML(product.name)}</h3>
      <p>${escapeHTML(product.description)}</p>
      <div class="price">${Number(product.price).toLocaleString("vi-VN")} ${escapeHTML(product.currency)}</div>
      <ul class="spec-mini">
        ${product.specs.map(s => `<li><strong>${escapeHTML(s[0])}</strong><span>${escapeHTML(s[1])}</span></li>`).join("")}
      </ul>
      <button class="btn btn-secondary btn-small" onclick="showProductSchema('${product.slug}')">Xem dữ liệu Schema</button>
    </article>
  `;
}

function renderFaq(item) {
  return `
    <details class="faq-item">
      <summary>${escapeHTML(item.question)}</summary>
      <div class="faq-answer"><p>${escapeHTML(item.answer)}</p></div>
    </details>
  `;
}

function showProductSchema(slug) {
  const product = GEO_DATA.products.find(p => p.slug === slug);
  if (!product) return;
  const schema = {
    "@context":"https://schema.org",
    "@type":"Product",
    "name":product.name,
    "description":product.description,
    "brand":{"@type":"Brand","name":product.brand},
    "offers":{
      "@type":"Offer",
      "priceCurrency":product.currency,
      "price":product.price,
      "availability":"https://schema.org/" + product.availability
    }
  };
  alert(JSON.stringify(schema, null, 2));
}

function renderArticle() {
  const slug = new URLSearchParams(location.search).get("slug");
  const post = GEO_DATA.posts.find(p => p.slug === slug);
  const root = document.querySelector("#article-root");
  if (!root) return;

  if (!post) {
    root.innerHTML = `
      <section class="page-head"><div class="container">
        <h1>Không tìm thấy bài viết</h1>
        <p><a class="text-link" href="posts.html">← Quay lại danh sách bài viết</a></p>
      </div></section>`;
    return;
  }

  document.title = `${post.title} | GEO Laptop Sinh Viên`;
  const canonical = document.querySelector('link[rel="canonical"]') || document.head.appendChild(Object.assign(document.createElement("link"), {rel:"canonical"}));
  canonical.href = `${GEO_DATA.site.url}article.html?slug=${encodeURIComponent(post.slug)}`;

  const schema = {
    "@context":"https://schema.org",
    "@type":"Article",
    "headline":post.title,
    "description":post.excerpt,
    "datePublished":post.date,
    "dateModified":post.date,
    "inLanguage":"vi-VN",
    "author":{"@type":"Organization","name":GEO_DATA.site.name},
    "publisher":{"@type":"Organization","name":GEO_DATA.site.name},
    "mainEntityOfPage": `${GEO_DATA.site.url}article.html?slug=${encodeURIComponent(post.slug)}`
  };
  const schemaScript = document.createElement("script");
  schemaScript.type = "application/ld+json";
  schemaScript.textContent = JSON.stringify(schema);
  document.head.appendChild(schemaScript);

  root.innerHTML = `
    <section class="article-head">
      <div class="container narrow">
        <div class="card-meta"><span>${escapeHTML(post.category)}</span><span>${escapeHTML(post.date)}</span><span>${escapeHTML(post.readTime)}</span></div>
        <h1>${escapeHTML(post.title)}</h1>
        <p class="lead">${escapeHTML(post.excerpt)}</p>
      </div>
    </section>
    <section class="section">
      <div class="container content-layout">
        <article class="prose article-body">
          ${post.content}
          <div class="article-source">
            <strong>Nguồn nội dung:</strong>
            Website demo GEO Laptop Sinh Viên. Các thông tin cấu hình là nội dung minh họa cho bài tập.
          </div>
        </article>
        <aside class="side-card sticky">
          <h3>Thông tin bài viết</h3>
          <p><strong>Intent:</strong> ${escapeHTML(post.category)}</p>
          <p><strong>Cập nhật:</strong> ${escapeHTML(post.date)}</p>
          <p><strong>Từ khóa:</strong></p>
          <div class="tag-row">${post.keywords.map(k => `<span class="tag">${escapeHTML(k)}</span>`).join("")}</div>
          <a class="btn btn-primary btn-full" href="faq.html">Xem FAQ</a>
        </aside>
      </div>
    </section>
  `;
}

renderHeader();
renderFooter();

document.addEventListener("DOMContentLoaded", () => {
  const featured = document.querySelector("#featured-posts");
  if (featured) featured.innerHTML = GEO_DATA.posts.slice(0, 3).map(renderPostCard).join("");

  const faq = document.querySelector("#home-faq");
  if (faq) faq.innerHTML = GEO_DATA.faq.slice(0, 4).map(renderFaq).join("");
});
