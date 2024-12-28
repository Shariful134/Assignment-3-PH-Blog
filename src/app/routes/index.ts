import { Router } from 'express';
import { UserRoutes } from '../modules/auth/auth.route';
import { BlogRoutes } from '../modules/Blog/blog.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
