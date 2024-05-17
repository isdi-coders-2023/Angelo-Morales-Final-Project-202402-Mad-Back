import { type PrismaClient } from '@prisma/client';
import createDebug from 'debug';
import { type Watch, type WatchCreateDto } from '../entities/watch.js';
import { type Repo } from './type.repo.js';
import { HttpError } from '../middleware/errors.middleware.js';

const debug = createDebug('watchs:repository');

const select = {
  id: true,
  brand: true,
  model: true,
  cristal: true,
  waterResist: true,
  size: true,
  price: true,
  machine: true,
  image: true,
  authorId: true,
};

export class WatchRepo implements Repo<Watch, WatchCreateDto> {
  constructor(private readonly prisma: PrismaClient) {
    debug('instantiated watchs repository');
  }

  async readAll() {
    return this.prisma.watch.findMany({ select });
  }

  async create(data: WatchCreateDto) {
    const newWatch = this.prisma.watch.create({
      data: { ...data },
      select,
    });
    return newWatch;
  }

  async readById(id: string) {
    const watch = await this.prisma.watch.findUnique({
      where: { id },
      select,
    });
    if (!watch) {
      throw new HttpError(404, 'Not Found', `Watch ${id} not found`);
    }

    return watch;
  }

  async update(id: string, data: Partial<WatchCreateDto>) {
    const watch = await this.prisma.watch.findMany({
      where: { id },
      select,
    });
    if (!watch) {
      throw new HttpError(404, 'Not Found', `Watch ${id} not found`);
    }

    return this.prisma.watch.update({
      where: { id },
      data,
      select,
    });
  }

  async delete(id: string) {
    const watch = await this.prisma.watch.findMany({
      where: { id },
      select,
    });
    if (!watch) {
      throw new HttpError(404, 'Not Found', `Watch ${id} not found`);
    }

    return this.prisma.watch.delete({
      where: { id },
      select,
    });
  }
}
