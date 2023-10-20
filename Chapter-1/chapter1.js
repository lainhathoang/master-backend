const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plan",
    });
    res.write("Hello, world!\n");
    res.end();
  })
  .listen(3000);
