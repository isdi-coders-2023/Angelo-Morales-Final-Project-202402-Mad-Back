import Joi from 'joi';
import { type UserCreateDto } from './user.js';

export const userCreateDtoSchema = Joi.object<UserCreateDto>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  lastName: Joi.string(),
});

export const userUpdateDtoSchema = Joi.object<UserCreateDto>({
  name: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string(),
  lastName: Joi.string(),
});
