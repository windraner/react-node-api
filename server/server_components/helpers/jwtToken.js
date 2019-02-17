import jwt from 'jsonwebtoken';
import { UNAUTHORIZED } from 'http-status';

export const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(200).json({ auth: false, message: 'No token provided.' });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(UNAUTHORIZED).json({ message: 'Failed to authenticate token.' });
    }
    req.userId = decoded.id;
    next();
  });
}

export const createToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: 3600
  });
}
