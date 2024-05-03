import express, { type Express } from 'express';
import { type PrismaClient } from '@prisma/client';
import debug from 'debug';
import morgan from 'morgan';
import cors from 'cors';
import { AuthInterceptor } from './middleware/auth.interceptor.js';
import { UsersRouter } from './routes/users.router.js';
import { UsersController } from './controllers/users.controller.js';
import { UsersRepo } from './repositories/users.repo.js';

export const createApp = () => express();

export const startApp = (app: Express, prisma: PrismaClient) => {
  debug('starting app');
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.static('public'));

  const authInterceptor = new AuthInterceptor();

  const usersRepo = new UsersRepo(prisma);
  const usersController = new UsersController(usersRepo);
  const usersRouter = new UsersRouter(usersController, authInterceptor);
  app.use('/users', usersRouter.router);
};
