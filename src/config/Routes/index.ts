type RouteKeys = 'base' | 'dashboard' | 'login';

const Routes: Record<RouteKeys, string> = {
  base: '/',
  dashboard:"/dashboard",
  login: '/auth/login',
};

export default Routes;
