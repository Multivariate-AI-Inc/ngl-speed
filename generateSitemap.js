require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { create } = require("xmlbuilder");

const getDate = () => new Date().toISOString().split("T")[0];

const staticPages = [
  "/",
  "/career/",
  "/contact/",
  "/blog/",
  "/font-changer/",
  "/free-app-store-optimization/",
  "/get-free-aso-analysis/",
  "/html-editor/",
  "/internal-link-checker/",
  "/json-editor/",
  "/keyword-density-tool/",
  "/privacy-policy/",
  "/search-engine-optimization/",
  "/seo-and-aso-keyword-content-writing-assistant/",
  "/terms-of-service/",
  "/title-meta-description/",
  "/web-page-crawler/",
  "/website-mobile-friendly-checker/",
  "/website-technology-checker/",
]; // List your static pages here

const createSitemapIndex = () => {
  const sitemapIndex = create("sitemapindex", {
    version: "1.0",
    encoding: "UTF-8",
  }).att({
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "xsi:schemaLocation":
      "http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd",
  });

  const sitemaps = [
    {
      loc: "https://www.nextgrowthlabs.com/static-sitemap.xml",
      lastmod: getDate(),
    },
  ];

  sitemaps.forEach((sitemap) => {
    sitemapIndex
      .ele("sitemap")
      .ele("loc", sitemap.loc)
      .up()
      .ele("lastmod", sitemap.lastmod)
      .up();
  });

  return sitemapIndex.end({ pretty: true });
};

const createSitemap = (urls, filename) => {
  const sitemap = create("urlset", {
    version: "1.0",
    encoding: "UTF-8",
  }).att({
    xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
  });

  urls.forEach((url) => {
    const urlElement = sitemap.ele("url");
    urlElement
      .ele("loc", `https://www.nextgrowthlabs.com${url}`)
      .up()
      .ele("lastmod", getDate())
      .up();
  });

  const filepath = path.join(__dirname, "public", filename);
  fs.writeFileSync(filepath, sitemap.end({ pretty: true }));
};

const fetchBlogPosts = async () => {
  const fetch = (await import("node-fetch")).default;
  const response = await fetch("https://asokeywordtool.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query {
        posts(first: 100) {
          nodes {
            slug
            date
          }
        }
      }
    `,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  const data = await response.json();
  return data.data.posts.nodes.map((post) => `/blog/${post.slug}/`);
};

const generateSitemaps = async () => {
  // Ensure public directory exists
  const publicDir = path.join(__dirname, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Generate sitemap index
  const sitemapIndex = createSitemapIndex();
  fs.writeFileSync(path.join(publicDir, "sitemap-index.xml"), sitemapIndex);

  // Generate static pages sitemap
  createSitemap(staticPages, "static-sitemap.xml");

  // Fetch blog posts and generate blog pages sitemap
};

generateSitemaps();
