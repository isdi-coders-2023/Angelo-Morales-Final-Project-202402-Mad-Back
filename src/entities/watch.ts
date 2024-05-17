import { type User } from './user';

export type Watch = {
  id: string;
  brand: string;
  authorId: string;
  model: string;
  cristal: string;
  waterResist: string;
  size: string;
  price: string;
  machine: string;
  image: string;
};

export type WatchCreateDto = {
  brand: string;
  authorId: string;
  model: string;
  price: string;
  size: string;
  cristal: string;
  waterResist: string;
  machine: string;
  image: string;
};

export type WatchUpdateDto = Partial<WatchCreateDto>;
