import { Router } from 'express';
// import ProductController from '../controllers/product.controller';
import UserController from '../controllers/user.controller';

const router = Router();
const userController = new UserController();

// router.get('/', userController.getAll);
router.post('/', userController.createUser);

export default router;