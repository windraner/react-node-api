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
  updateWorkerSchema
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

router.put('/update/:id',
  verifyToken,
  validate(updateWorkerSchema),
  catchErrors(updateWorker)
);

router.delete('/delete/:id',
  verifyToken,
  catchErrors(removeWorker)
);

module.exports = router;
