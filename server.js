// server.js
const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

const { createServer } = require("http");
app.prepare().then(() => {
  createServer(handler).listen(3000);
});

// // server.js
// const express = require("express");
// // const { createServer } = require("http");
// // const { parse } = require("url");
// const next = require("next");

// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app
//   .prepare()
//   .then(() => {
//     const server = express();

//     server.get("/", (req, res) => {
//       const actualPage = "/user/market";
//       app.render(req, res, actualPage);
//     });

//     server.get("/user/market/:id", (req, res) => {
//       const actualPage = "/user/market";
//       app.render(req, res, actualPage, req.query);
//     });

//     server.get("/user/market", (req, res) => {
//       const actualPage = "/user/market";
//       app.render(req, res, actualPage);
//     });

//     server.get("/user/dataAnalysis", (req, res) => {
//       const actualPage = "/user/dataAnalysis";
//       app.render(req, res, actualPage);
//     });

//     server.get("/user/about", (req, res) => {
//       const actualPage = "/user/about";
//       app.render(req, res, actualPage);
//     });

//     server.get("/user/contactus", (req, res) => {
//       const actualPage = "/user/contactus";
//       app.render(req, res, actualPage);
//     });

//     server.all("*", (req, res) => {
//       return handle(req, res);
//     });
//     server.listen(3000, (err) => {
//       if (err) throw err;
//       console.log("> Ready on http://localhost:3000");
//     });
//   })
//   .catch((ex) => {
//     console.error(ex.stack);
//     process.exit(1);
//   });

// // server.js
// const { createServer } = require("http");
// const { parse } = require("url");
// const next = require("next");

// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   createServer((req, res) => {
//     // Be sure to pass `true` as the second argument to `url.parse`.
//     // This tells it to parse the query portion of the URL.
//     const parsedUrl = parse(req.url, true);
//     const { pathname, query } = parsedUrl;

//     if (pathname === "/") {
//       app.render(req, res, "/user/market", query);
//     } else {
//       handle(req, res, parsedUrl);
//     }
//   }).listen(3000, (err) => {
//     if (err) throw err;
//     console.log("> Ready on http://localhost:3000");
//   });
// });
