// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/joseph.honess/Documents/joseph/portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/joseph.honess/Documents/joseph/portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/joseph.honess/Documents/joseph/portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/joseph.honess/Documents/joseph/portfolio/src/pages/About.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/joseph.honess/Documents/joseph/portfolio/src/pages/contact.js")),
  "component---src-pages-cv-js": preferDefault(require("/Users/joseph.honess/Documents/joseph/portfolio/src/pages/CV.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/joseph.honess/Documents/joseph/portfolio/src/pages/index.js")),
  "component---src-pages-work-js": preferDefault(require("/Users/joseph.honess/Documents/joseph/portfolio/src/pages/work.js"))
}

exports.json = {
  "layout-index.json": require("/Users/joseph.honess/Documents/joseph/portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/joseph.honess/Documents/joseph/portfolio/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/joseph.honess/Documents/joseph/portfolio/.cache/json/404.json"),
  "about.json": require("/Users/joseph.honess/Documents/joseph/portfolio/.cache/json/about.json"),
  "contact.json": require("/Users/joseph.honess/Documents/joseph/portfolio/.cache/json/contact.json"),
  "cv.json": require("/Users/joseph.honess/Documents/joseph/portfolio/.cache/json/cv.json"),
  "index.json": require("/Users/joseph.honess/Documents/joseph/portfolio/.cache/json/index.json"),
  "work.json": require("/Users/joseph.honess/Documents/joseph/portfolio/.cache/json/work.json"),
  "404-html.json": require("/Users/joseph.honess/Documents/joseph/portfolio/.cache/json/404-html.json")
}