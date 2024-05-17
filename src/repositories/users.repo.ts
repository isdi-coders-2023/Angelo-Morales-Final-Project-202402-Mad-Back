import { type PrismaClient } from '@prisma/client';
import { type WithLoginRepo } from './type.repo';
import { type User, type UserCreateDto } from '../entities/user.js';
import debug from 'debug';
import { HttpError } from '../middleware/errors.middleware.js';

const select = {
  id: true,
  email: true,
  name: true,
  lastName: true,
  role: true,
  watchs: {
    select: {
      id: true,
      brand: true,
      author: true,
      authorId: true,
      model: true,
      cristal: true,
      waterResist: true,
      size: true,
      price: true,
      machine: true,
      image: true,
    },
  },
};

export class UsersRepo implements WithLoginRepo<User, UserCreateDto> {
  constructor(private readonly prisma: PrismaClient) {
    debug('Instantiated users sql repository');
  }

  async readAll() {
    return this.prisma.user.findMany({ select });
  }

  async readById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select,
    });
    if (!user) {
      throw new HttpError(404, 'Not Found', `User ${id} not found`);
    }

    return user;
  }

  async searchForLogin(key: 'email' | 'name', value: string) {
    if (!['email', 'name'].includes(key)) {
      throw new HttpError(404, 'Not Found', 'Invalid query parameters');
    }

    const userData = await this.prisma.user.findFirst({
      where: {
        [key]: value,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        password: true,
      },
    });

    if (!userData) {
      throw new HttpError(404, 'Not Found', `Invalid ${key} or password`);
    }

    return userData;
  }

  async create(data: UserCreateDto) {
    const newUser = await this.prisma.user.create({
      data: { ...data },
      select,
    });
    return newUser;
  }

  async update(id: string, data: Partial<UserCreateDto>) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new HttpError(404, 'Not Found', `User ${id} not found`);
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select,
    });
  }

  async delete(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new HttpError(404, 'Not Found', `User ${id} not found`);
    }

    return this.prisma.user.delete({
      where: { id },
      select,
    });
  }
}
