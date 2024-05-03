import { type Watch } from './watch';

export type User = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password?: string;
  role: 'admin' | 'user';
  watchs: Partial<Watch[]>;
};

export type UserCreateDto = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

export type UserUpdateDto = Partial<UserCreateDto>;
