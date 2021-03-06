//core modules
// const fs = require('fs');
// fs.readFile('package.json', 'utf-8', (err, data) => {
//   console.log(data);
// });

//local modules
// const {printWithAsterisk} = require('./utils');
// printWithAsterisk('hello');

//third-party
// const _ = require('lodash');
//
// const array = [1, 5, 10];
// const lastElement = _.last(array);
// printWithAsterisk(lastElement);
//
// const url = require('url');
// const urlObject = url.parse('http://localhost:3000/user/register?z=1&name=test', true);
// const {hostname, query, pathname} = urlObject;

const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;

  if (path === '/') {
    res.write('home page');
  } else if (path === '/about') {
    res.write('about page');
  } else {
    res.writeHead(404);
    res.write('404');
  }
  res.end();
}).listen(8080);