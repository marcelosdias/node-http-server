const http = require('http');
const { URL } = require('url');

const routes = require('./routes');

const bodyParser = require('./helper/bodyParser');

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

  const parsedUrl = new URL(`http://localhost:3000${request.url}`);

  let { pathname } = parsedUrl;

  let id = null;

  const splitEndpoint = pathname.split('/').filter((routeItem) => Boolean(routeItem));

  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

  const route = routes.find((rountObj) => (
    rountObj.endpoint === pathname && rountObj.method === request.method
  ));

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams);
    request.params = { id };

    response.send = (statusCOde, body) => {
      response.writeHead(statusCOde, { 'Content-Type': 'text/html' });
      response.end(JSON.stringify(body));
    };

    if (['POST', 'PUT'].includes(request.method)) {
      bodyParser(request, () => route.handler(request, response));
    } else {
      route.handler(request, response);
    }
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${pathname}`);
  }
});

server.listen(3000, () => console.log('Server started at http://localhost:3000'));
