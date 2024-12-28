import express from 'express';
import auth from '../../midleware/auth';
import { USER_ROLE } from '../User/user.constant';
import validateRequest from '../../midleware/validateRequest';
import { blogValidation } from './blog.validation';
import { blogControllers } from './blog.controllers';
const router = express.Router();

//creating a Blog
router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(blogValidation.blogValidationSchema),
  blogControllers.createBlog,
);

//updatte a Blog
router.patch(
  '/:id',
  auth(USER_ROLE.user),
  validateRequest(blogValidation.updatedBlogValidationSchema),
  blogControllers.updatedBlog,
);
router.delete('/:id', auth(USER_ROLE.user), blogControllers.deleteBlog);

router.get('/', blogControllers.getAllBlogs);

export const BlogRoutes = router;
