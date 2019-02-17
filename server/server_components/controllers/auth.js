import Joi from 'joi';
import User from '../models/User';
import { OK, UNAUTHORIZED, CONFLICT, NOT_FOUND } from 'http-status';
import { compareSync } from 'bcrypt';
import { createToken } from '../helpers/jwtToken';

export const registerSchema = {
  name: Joi.string(),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
};

export const loginSchema = {
  email: Joi.string().required(),
  password: Joi.string().required()
};

export const login = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(UNAUTHORIZED).json({ message: 'email/password dont match' });
  }
  const passwordIsValid = compareSync(req.body.password, user.password);
  if (!passwordIsValid) {
    return res.status(UNAUTHORIZED).json({ message: 'email/password dont match' });
  }
  return res.status(OK).json({ auth: true, token: createToken({ id: user._id }) });
};

export const register = async (req, res, next) => {
  const user =  await User.findOne({ email: req.body.email });
  if(user) {
    return res.status(CONFLICT).json({ message: 'user already exsist' });
  }

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  await newUser.save();

  return res.status(OK).json({
    auth: true,
    token: createToken({ id: newUser._id }),
    name: newUser.name,
    email: newUser.email,
  });
};

export const getUser = async (req, res, next) => {
  const user = await User.findOne({ _id: req.userId });

  if(!user) return res.status(NOT_FOUND).json({ message: 'user not found'});

  return res.status(OK).json(user);
};
