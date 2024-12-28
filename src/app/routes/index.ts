import { Router } from 'express';
import { UserRoutes } from '../modules/auth/auth.route';
import { BlogRoutes } from '../modules/Blog/blog.routes';
import { adminRoutes } from '../modules/Admin/admin.routes';

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
  {
    path: '/admin',
    route: adminRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
