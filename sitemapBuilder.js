
import articleMeta from "./src/articleMeta.jsx";
import { writeFileSync } from 'node:fs';


async function generateSitemap() {
  let articleRoutes = Object.keys(articleMeta);
  console.log(articleRoutes);

  let routePaths = [
    ...articleRoutes.map((articlePath) => `/articles/${articlePath}`),
    "/articles",
    "/skills",
    "/workhistory",
    "/aboutme",
    "/"
  ]

  const sitemapString = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmln="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routePaths.map(routePath => `<url><loc>https://alexstormwood.com${routePath}</loc></url>`).join("")}
</urlset>`;

  writeFileSync("./public/sitemap.xml", sitemapString);

}

generateSitemap();
