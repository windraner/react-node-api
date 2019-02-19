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

  return res.status(OK).json({ status: 'ok' });
};

export const getWorkers = async (req, res, next) => {
  let page = req.body.page || 1;
  const limit = 5;
  const skip = (page * limit) - limit;

  let searchOptions = {};
  if(req.body.q) {
    const regex = new RegExp(req.body.q, 'i');
    searchOptions = {
      $or: [
        {'firstName':{ $regex: regex }},
        {'lastName':{ $regex: regex }},
        {'gender':{ $regex: regex }},
        {'contactInformation':{ $regex: regex }},
        {'salary':{ $regex: regex }},
        {'position':{ $regex: regex }}
      ]
    };
  }

  const workersPromise = Worker
    .find(searchOptions)
    .skip(skip)
    .limit(limit)
    .sort({ created_at: -1 });

  const countPromise = Worker.find(searchOptions).count();

  let [workers, count] = await Promise.all([workersPromise, countPromise]);
  const pages = Math.ceil(count / limit) || 1;

  if (!workers.length && skip) {
    workers = await Worker
      .find(searchOptions)
      .limit(limit)
      .sort({ created_at: -1 })
      .exec();

    page = 1;
  }

  return res.status(OK).json({ workers, page, pages });
};

exports.updateWorker = async (req, res, next) => {
  req.body.updated_at = new Date();
  const worker = await Worker.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).exec();

  if(!worker) return res.status(BAD_REQUEST).json({ message: 'worker does not exist' });

  return res.status(OK).json({ status: 'ok' });
};

exports.removeWorker = async (req, res, next) => {
  const worker = await Worker.findOneAndDelete({ _id: req.params.id }).exec();

  if(!worker) return res.status(BAD_REQUEST).json({ message: 'worker does not exist' });

  return res.status(OK).json({ status: 'ok' });
};
