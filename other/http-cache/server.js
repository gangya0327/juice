const http = require('http');
const url = require('url');
const fs = require('fs');
const etag = require('etag');

http
  .createServer((req, res) => {
    const { pathname } = url.parse(req.url);
    if (pathname === '/') {
      fs.createReadStream('./index.html').pipe(res);
    } else if (pathname === '/a1.png') {
      console.log('a1.png');
      res.writeHead(200, {
        Expires: new Date('2023-08-02 23:59:59').toUTCString(),
      });
      fs.createReadStream('./a1.png').pipe(res);
    } else if (pathname === '/a2.png') {
      console.log('a2.png');
      res.writeHead(200, {
        'Cache-Control': 'max-age=30',
      });
      fs.createReadStream('./a2.png').pipe(res);
    } else if (pathname === '/a3.png') {
      const { mtime } = fs.statSync('./a3.png');
      const ifModifiedSince = req.headers['if-modified-since'];
      if (ifModifiedSince === mtime.toUTCString()) {
        res.statusCode = 304;
        return res.end();
      }
      console.log('a3.png');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Last-Modified', mtime.toUTCString());
      fs.createReadStream('./a3.png').pipe(res);
    } else if (pathname === './a4.png') {
      const file = fs.readFileSync('./a4.png');
      const etagCon = etag(file);
      const ifNoneMatch = req.headers['if-None-Match'];
      if (ifNoneMatch === etagCon) {
        res.statusCode = 304;
        return res.end();
      }
      console.log('a4.png');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Etag', etagCon);
      res.end(file);
    }
  })
  .listen(5001, () => console.log('server run on http://localhost:5001'));
