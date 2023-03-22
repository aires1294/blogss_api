import { Router } from 'express';
// import ProductController from '../controllers/product.controller';
import UserController from '../controllers/user.controller';
import validateLoginBody from '../utils/middlewares';

const router = Router();
const userController = new UserController();

router.post('/', validateLoginBody, userController.validateLogin);

export default router;