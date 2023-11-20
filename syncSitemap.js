const axios = require('axios');
const fs = require('fs');
const prettier = require('prettier');

const SitemapGeneratedDate = new Date().toISOString();

const API_DOMAIN = 'https://hanuri.or.kr/api';
const FRONT_DOMAIN = 'https://hanuri.or.kr';

const routes = ['/', '/about'];

const formatting = (target) =>
  prettier.format(target, {
    parser: 'html',
  });

function makeSitemapItem(url) {
  return `
    <url>
      <loc>${url}</loc>
      <lastmod>${SitemapGeneratedDate}</lastmod>
    </url>
  `;
}

async function makePostSitemap() {
  try {
    const pages = routes.map((page) => FRONT_DOMAIN + page);
    const pageSitemap = pages.map((page) => makeSitemapItem(page)).join('');

    let postsSitemap = '';
    let counta = 0;

    const posts = await axios.post(`${API_DOMAIN}/hanuries/sitemap`);

    if (!posts) {
      console.log('작성된 포스트가 없습니다.');
    }

    postsSitemap = posts.data
      .map((post) => {
        counta += 1;
        return makeSitemapItem(`${FRONT_DOMAIN}/hanuri/${post.id}`);
      })
      .join('');

    console.log(`${counta} 개 포스트 사이트 맵 생성!`);

    const generateIndexSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http:www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${pageSitemap}
    </urlset>
  `;

    const generatePostSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http:www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${postsSitemap}
    </urlset>
  `;

    const formattedIndexSitemap = await formatting(generateIndexSitemap);
    const formattedPostSitemap = await formatting(generatePostSitemap);

    fs.writeFileSync(
      `${process.cwd()}/public/sitemap.xml`,
      formattedIndexSitemap,
      'utf8',
    );
    fs.writeFileSync(
      `${process.cwd()}/public/post-sitemap.xml`,
      formattedPostSitemap,
      'utf8',
    );
  } catch (err) {
    console.log(err);
  }
}

makePostSitemap();
