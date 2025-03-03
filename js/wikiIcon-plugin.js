window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(function (hook) {
  hook.beforeEach(function (content) {
    return content.replace(/<a\s+href="([^"]+)"[^>]*>(wikipedia|ویکی‌پدیا)<\/a>/g, function (match, href, linkText) {
      const pageTitle = decodeURIComponent(href.split('/').pop()).replace('_', ' ');
      return `
        <span class="wikipedia-preview-container">
          <a href="${href}" target="_blank" class="wikipedia-link" title="${pageTitle}" data-page-href="${href}">
            <img src="https://en.wikipedia.org/favicon.ico" alt="${pageTitle}" class="wikipedia-icon">
          </a>
          <span class="wikipedia-preview-box">
            <iframe src="${href}" class="wikipedia-iframe"></iframe>
          </span>
        </span>
      `;
    });
  });
});