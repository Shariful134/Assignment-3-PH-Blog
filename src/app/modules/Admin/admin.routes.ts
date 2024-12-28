import express from 'express';
import auth from '../../midleware/auth';
import { USER_ROLE } from '../User/user.constant';
import { adminControllers } from './admin.controllers';

const router = express.Router();

// Blocked User
router.patch(
  '/users/:userId/block',
  auth(USER_ROLE.admin),
  adminControllers.blockedUserController,
);

// delete Blog
router.delete(
  '/blogs/:id',
  auth(USER_ROLE.admin),
  adminControllers.deleteBlogController,
);

export const adminRoutes = router;
