import express from 'express';
import { AuthRoutes } from '../app/modules/auth/auth.route';
import { UserRoutes } from '../app/modules/user/user.route';
import { FaqRoutes } from '../app/modules/faq/faq.route';
import { BlogRoutes } from '../app/modules/blog/blog.route';
import { SupportRoutes } from '../app/modules/support/support.route';

const router = express.Router();

const apiRoutes = [
      {
            path: '/users',
            route: UserRoutes,
      },
      {
            path: '/auth',
            route: AuthRoutes,
      },
      {
            path: '/faqs',
            route: FaqRoutes,
      },
      {
            path: '/blogs',
            route: BlogRoutes,
      },
      {
            path: '/supports',
            route: SupportRoutes,
      },
];

apiRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
