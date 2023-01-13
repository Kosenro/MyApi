import { Request, Response } from 'express';

const jwt = require('jsonwebtoken');

// connection au token
function authenticateJWT(req: Request, res: Response, next: Function) {
  const accessTokenSecret = 'Cameronlegoat';
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, accessTokenSecret, (err : Error) => {
      if (err) {
        return res.sendStatus(403);
      }

      next();
      return null;
    });
  } else {
    return res.sendStatus(401);
  }

  return null;
}

export default authenticateJWT;
