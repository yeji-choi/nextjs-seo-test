// routes.js
const routes = require("next-routes");

// module.exports = routes() // ----   ----      -----
//   .add("/") // about  about     /about
//   .add("/user/market") // about  about     /about
//   .add("/user/dataAnalysis") // about  about     /about
//   .add("/user/about") // about  about     /about
//   .add("marketDetail", "/user/market/[id]", "/user/market/:id") // blog   blog      /blog/:slug
//   .add("user", "/user/:id", "profile") // user   profile   /user/:id
//   .add("/:noname/:lang(en|es)/:wow+", "complex") // (none) complex   /:noname/:lang(en|es)/:wow+
//   .add({ name: "beta", pattern: "/v3", page: "v3" });

module.exports = routes()
  .add({
    name: "home",
    pattern: "/",
    page: "/user/market",
  })
  .add({
    name: "market",
    pattern: "/user/market",
    page: "/user/market",
  })
  .add({
    name: "marketDetail",
    pattern: "/user/market/:id",
    page: "/user/market/[id]",
  });
