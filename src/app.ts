import { type PrismaClient } from '@prisma/client';
import cors from 'cors';
import createDebug from 'debug';
import express, { type Express } from 'express';
import morgan from 'morgan';
import { AuthInterceptor } from './middleware/auth.interceptor.js';
import { UsersRouter } from './routes/users.router.js';
import { UsersController } from './controllers/users.controller.js';
import { UsersRepo } from './repositories/users.repo.js';
import { WatchRepo } from './repositories/watch.repo.js';
import { WatchsController } from './controllers/watch.controller.js';
import { WatchsRouter } from './routes/watchs.router.js';
import { FilesInterceptor } from './middleware/files.interceptor.js';

const debug = createDebug('app');
export const createApp = () => express();

export const startApp = (app: Express, prisma: PrismaClient) => {
  debug('starting app');
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.static('public'));

  const authInterceptor = new AuthInterceptor();
  const filesInterceptor = new FilesInterceptor();

  const usersRepo = new UsersRepo(prisma);
  const usersController = new UsersController(usersRepo);
  const usersRouter = new UsersRouter(usersController, authInterceptor);
  app.use('/users', usersRouter.router);

  const watchsRepo = new WatchRepo(prisma);
  const watchsController = new WatchsController(watchsRepo);
  const watchsRouter = new WatchsRouter(
    watchsController,
    watchsRepo,
    authInterceptor,
    filesInterceptor
  );
  app.use('/watchs', watchsRouter.router);
};
