const express = require('express');
const router = express.Router();

import validate from './helpers/validate';
import { verifyToken } from "./helpers/jwtToken";
import {
  getUser,
  register,
  logout,
  login,
  loginSchema,
  registerSchema
} from "./controllers/auth";

router.post('/register',
  validate(registerSchema),
  register,
);

router.get('/info',
  verifyToken,
  getUser
);

router.post('/login',
  validate(loginSchema),
  login
);

module.exports = router;
