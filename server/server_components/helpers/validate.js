import Joi from "joi";
import {HttpUnprocessableEntityError} from "./errors";

export const reduceDetails = (errors, detail) => {
  const { path, type, message, context } = detail;
  errors[path] = { type, message, ...context };

  return errors;
};

export const validator = (schema) => {
  return (req, res, next) => {
    if (!schema) {
      return next();
    }
    const value = Object.assign({}, req.query, req.body, req.params);
    return Joi.validate(value, schema, (err) => {
      if (err) {
        next(new HttpUnprocessableEntityError(err.details[0].message));
      }
      next();
    });
  };
};

export default validator;

