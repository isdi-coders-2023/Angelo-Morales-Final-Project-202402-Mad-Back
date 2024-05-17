import Joi from 'joi';
import { type WatchCreateDto } from './watch';

export const watchCreateDtoShema = Joi.object<WatchCreateDto>({
  brand: Joi.string().required(),
  authorId: Joi.string(),
  model: Joi.string().required(),
  price: Joi.string().required(),
  size: Joi.string(),
  cristal: Joi.string(),
  waterResist: Joi.string(),
  machine: Joi.string().required(),
  image: Joi.string(),
});

export const watchUdapteDtoShema = Joi.object<WatchCreateDto>({
  brand: Joi.string().required(),
  authorId: Joi.string(),
  model: Joi.string().required(),
  price: Joi.string().required(),
  size: Joi.string(),
  cristal: Joi.string(),
  waterResist: Joi.string(),
  machine: Joi.string().required(),
  image: Joi.string(),
});
