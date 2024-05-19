import createDebug from 'debug';
import { type Watch, type WatchCreateDto } from '../entities/watch.js';
import {
  watchCreateDtoShema,
  watchUdapteDtoShema,
} from '../entities/watch.shema.js';
import { type Repo } from '../repositories/type.repo.js';
import { BaseController } from './base.controller.js';
import { type Request, type Response, type NextFunction } from 'express';
import { type Payload } from '../services/auth.services.js';
const debug = createDebug('events:controller');

export class WatchsController extends BaseController<Watch, WatchCreateDto> {
  constructor(protected readonly repo: Repo<Watch, WatchCreateDto>) {
    super(repo, watchCreateDtoShema, watchUdapteDtoShema);
    debug('instantiated watch controller');
  }

  async create(req: Request, res: Response, next: NextFunction) {
    console.log('clg reqbody', req.body);
    debug('Creating watchs');
    console.log('Request Body:', req.body);
    req.body.authorId = (req.body.payload as Payload).id;

    const { payload, ...rest } = req.body as WatchCreateDto & {
      payload: Payload;
    };
    req.body = rest;

    await super.create(req, res, next);
  }
}
