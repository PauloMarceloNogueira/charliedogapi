import restify from 'restify';
import corsMiddleware from 'restify-cors-middleware';

const cors = corsMiddleware({
  origins: ['*'],
  allowHeaders: ['API-Token'],
  exposeHeaders: ['API-Token-Expiry'],
});

module.exports = (() => {
  const server = restify.createServer();
  server.use(restify.plugins.bodyParser());
  server.use(restify.plugins.fullResponse());
  server.pre(cors.preflight);
  server.use(cors.actual);
  return server;
});
