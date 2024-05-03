import { type User } from './user';

export type Watch = {
  id: string;
  author: Partial<User>;
  brand: string;
  authorId: string;
  model: string;
  cristal: string;
  waterResist: string;
  size: string;
  price: number;
  machine: string;
  image: string;
};

export type WatchCreateDto = {
  author: Partial<User>;
  brand: string;
  authorId: string;
  model: string;
  cristal: string;
  waterResist: string;
  size: string;
  price: number;
  machine: string;
  image: string;
};
