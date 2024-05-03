import Joi from 'joi';
import { type WatchCreateDto } from './watch';

export const watchCreateDtoShema = Joi.object<WatchCreateDto>({
  brand: Joi.string().required(),
  authorId: Joi.string().required(),
  model: Joi.string().required(),
  price: Joi.string().required(),
  size: Joi.string().required(),
});
