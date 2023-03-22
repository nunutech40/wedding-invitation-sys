const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const config = require('./config/database'); // Import database configuration

const init = async () => {
  const connectionPool = config; // Assign connection pool from config

  const server = Hapi.server({
    port: 9000,
    host: process.env.NODE_ENV !== 'production' ? '127.0.0.1' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
    app: {
      db: connectionPool
    }
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();