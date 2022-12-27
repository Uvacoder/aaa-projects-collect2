import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import ensureAuthenticated from '@modules/Users/infra/http/middleware/ensureAuthenticated';
import UserController from '../controllers/UserController';
import AvatarController from '../controllers/AvatarController';

const usersRouter = Router();
const upload = multer(uploadConfig);
const userController = new UserController();
const avatarController = new AvatarController();

usersRouter.post('/', userController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  avatarController.update,
);

export default usersRouter;
