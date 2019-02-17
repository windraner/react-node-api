import Joi from 'joi';
import Worker from '../models/Worker';
import { OK, BAD_REQUEST } from 'http-status';

export const createWorkerSchema = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
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
  const store = await Worker.findOneAndUpdate({ _id: req.body.id }, req.body, {
    new: true, // return the new store instead of the old one
    runValidators: true
  }).exec();

  return res.status(OK).json({ store });
};

exports.removeWorker = async (req, res) => {
  await Worker.findOneAndDelete({ _id: req.params.id }).exec();

  return res.status(OK).json({ status: 'ok' });
};
