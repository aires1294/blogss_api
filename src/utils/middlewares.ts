import { Request, Response, NextFunction } from 'express';

export default function validateLoginBody(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).send({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(400).send({ message: '"password" is required' });
  }
  next();
}
