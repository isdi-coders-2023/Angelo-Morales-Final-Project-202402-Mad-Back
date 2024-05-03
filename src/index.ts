import { createServer } from 'http';
import { createApp, startApp } from './app.js';
import { debug } from 'console';
import { dbConnect } from './tools/db.connect.js';

const port = process.env.PORT ?? 3000;

const app = createApp();
const server = createServer(app);

dbConnect()
  .then((prisma) => {
    startApp(app, prisma);
    server.listen(port);
  })
  .catch((error) => {
    server.emit('error', error);
  });

server.on('error', (error) => {
  debug('error', error);
  process.exit(1);
});

server.on('listening', () => {
  debug(`Server Express is running http://localhost:${port}`);
});
