export interface Route {
  path: string;
  t?: string;
  isPrimaryNavigation?: boolean;
  isSecondaryNavigation?: boolean;
}

export const routes: { [key: string]: Route } = {
  HOME: {
    path: '/',
    t: 'routes.home',
    isPrimaryNavigation: true,
  },
  PROFILE: {
    path: '/profile',
    t: 'routes.profile',
    isSecondaryNavigation: true,
  },
  // INTEGRATION: @p6m-dev/react:feature route
};
