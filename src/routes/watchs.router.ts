import { type WatchsController } from '../controllers/watch.controller.js';
import { type AuthInterceptor } from '../middleware/auth.interceptor.js';
import { type FilesInterceptor } from '../middleware/files.interceptor.js';
import { type WatchRepo } from '../repositories/watch.repo.js';
import createDebug from 'debug';
import { Router as createRouter } from 'express';

const debug = createDebug('watchs:router');

export class WatchsRouter {
  router = createRouter();

  constructor(
    readonly controller: WatchsController,
    readonly watchsrepo: WatchRepo,
    readonly authInterceptor: AuthInterceptor,
    readonly filesInterceptor: FilesInterceptor
  ) {
    debug('instantiate watchs router');

    this.router.get(
      '/',

      controller.getAll.bind(controller)
    );
    this.router.get(
      '/:id',

      controller.getById.bind(controller)
    );
    this.router.post(
      '/',
      authInterceptor.authentication.bind(authInterceptor),
      filesInterceptor.singleFile('image'),
      filesInterceptor.cloudinaryUpload.bind(filesInterceptor),
      controller.create.bind(controller)
    );

    this.router.patch(
      '/:id',

      controller.update.bind(controller)
    );
    this.router.delete(
      '/:id',

      controller.delete.bind(controller)
    );
  }
}
