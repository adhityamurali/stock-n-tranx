import cors from 'cors';
import express from 'express';
import config from './config';
import { getInventoryRouter } from './controllers/inventory';

const getAPIRouter = () =>
  express
    .Router({ mergeParams: true })
    .use(express.json({ limit: '15mb' }))
    .use('/inventory', getInventoryRouter())

async function main() {
  const app = express()
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(cors())
    .use('/api', getAPIRouter())
    .listen(config.port, () =>
      console.log(`listening on http://localhost:${config.port}`)
    );
  function stopServer() {
    console.log('closing server');
    app.close();
  }
  process.once('SIGTERM', stopServer);
  process.once('SIGINT', stopServer);
}

main().catch((err) => console.error('app.init.failed', err));