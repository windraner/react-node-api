const express = require('express');
const router = express.Router();

import validate from './helpers/validate';
import { verifyToken } from "./helpers/jwtToken";
import {
  getUser,
  register,
  login,
  loginSchema,
  registerSchema
} from "./controllers/auth";
import {
  getWorkers,
  createWorker,
  updateWorker,
  removeWorker,
  createWorkerSchema,
} from './controllers/workerController';
import { catchErrors } from './helpers/errorHandlers';

router.post('/register',
  validate(registerSchema),
  catchErrors(register),
);

router.get('/info',
  verifyToken,
  catchErrors(getUser)
);

router.post('/login',
  validate(loginSchema),
  catchErrors(login)
);

router.post('/',
  verifyToken,
  catchErrors(getWorkers)
);

router.post('/create',
  verifyToken,
  validate(createWorkerSchema),
  catchErrors(createWorker)
);

router.post('/update',
  verifyToken,
  catchErrors(updateWorker)
);

router.get('/delete/:id',
  // verifyToken,
  catchErrors(removeWorker)
);

module.exports = router;
