const express = require("express");
const next = require("next");
const routes = require("./server/index");

const port = parseInt(process.env.PORT, 10) || 3050;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
// const handle = app.getRequestHandler();
const handle = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query);
});
app.prepare().then(() => {
  const server = express();

  server.use(handle);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(` Ready on http://localhost:${port}`);
  });
});
