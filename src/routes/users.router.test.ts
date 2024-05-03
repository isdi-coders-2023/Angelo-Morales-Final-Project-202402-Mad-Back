import { type UsersController } from '../controllers/users.controller.js';
import { type AuthInterceptor } from '../middleware/auth.interceptor.js';
import { UsersRouter } from './users.router.js';

describe('Given a instance of the class UsersRouter', () => {
  const controller = {
    login: jest.fn(),
    getAll: jest.fn(),
    getById: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  } as unknown as UsersController;
  const authInterceptor = {
    authentication: jest.fn(),
  } as unknown as AuthInterceptor;

  const router = new UsersRouter(controller, authInterceptor);
  test('Then it should be instance of the class', () => {
    expect(router).toBeInstanceOf(UsersRouter);
  });
});
