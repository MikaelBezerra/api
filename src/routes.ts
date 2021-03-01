import { Router } from 'express';
import { userController } from './controllers/userController';

export const router = Router();

const UserControllers = new userController();

router.post("/users", UserControllers.create)