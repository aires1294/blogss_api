import { Request, Response } from 'express';
// import { IUser } from '../interfaces/users';
import UserService from '../services/user.service';

class UserController {
  public userService = new UserService();
  
  // public getAll = async (_req: Request, res: Response) => {
  //   const products = await this.productService.getAll();
  //   res.status(200).json(products);
  // };
  
  public createUser = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.userService.createUser(product);
    console.log('flamengo', newProduct);
    
    res.status(201).json({ token: newProduct });
  };
}

export default UserController;