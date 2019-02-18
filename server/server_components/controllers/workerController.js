import Joi from 'joi';
import Worker from '../models/Worker';
import { OK, BAD_REQUEST } from 'http-status';

export const createWorkerSchema = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  gender: Joi.string().required(),
  contactInformation: Joi.string(),
  salary: Joi.string().required(),
  position: Joi.string().required(),
};

export const updateWorkerSchema = {
  id: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  gender: Joi.string().required(),
  contactInformation: Joi.string(),
  salary: Joi.string().required(),
  position: Joi.string().required(),
};

export const createWorker = async (req, res, next) => {
  await (new Worker(req.body)).save();
  const workers = await Worker.find();
  return res.status(OK).json({ status: 'ok', workers });
};

export const getWorkers = async (req, res, next) => {
  const workers = await Worker.find();
  return res.status(OK).json({ workers });
};

exports.updateWorker = async (req, res) => {
  req.body.updated_at = new Date();
  const worker = await Worker.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).exec();

  if(!worker) return res.status(BAD_REQUEST).json({ message: 'worker does not exist' });

  const workers = await Worker.find();

  return res.status(OK).json({ workers });
};

exports.removeWorker = async (req, res) => {
  const worker = await Worker.findOneAndDelete({ _id: req.params.id }).exec();

  if(!worker) return res.status(BAD_REQUEST).json({ message: 'worker does not exist' });

  const workers = await Worker.find();

  return res.status(OK).json({ workers });
};
