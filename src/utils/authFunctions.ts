// import { Request, Response, NextFunction } from 'express';

// import jwt from 'jsonwebtoken';

export const secret = process.env.JWT_SECRET || 'Flamengo';

export const jwtConfig: object = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

// const createToken = (id) => {
//   const token = jwt.sign({ data: { userId: id } }, secret, jwtConfig);
//   return token;
// };

// const validateToken = (req:Request, res:Response, next: NextFunction) => {
//   const token = req.header('authorization');
//   if (!token) {
//     return res.status(401)
//       .json({ message: 'Token not found' });
//   } 
//   try {
//     const verifyToken = jwt.verify(token, secret);
//     req.body.verifyToken = verifyToken; 
//     next();
//   } catch (e) {
//     return res.status(401).json({ message: 'Expired or invalid token' });
//   }   
// };

// module.exports = {
// //   createToken,
//   validateToken,
// };