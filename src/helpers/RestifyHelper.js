import restify from 'restify';
// import { bodyParser, CORS } from 'restify-plugins';

module.exports = (() => {
  const server = restify.createServer();
  server.use(restify.plugins.bodyParser());
  server.use(restify.plugins.fullResponse());
  return server;
});
