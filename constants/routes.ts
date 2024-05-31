export const APP_ROUTES = {
  HOME: "/",
  CONTACT: "/contact",
  LOGIN: "/login",
  REGISTER: "/login",
  DASHBOARD: {
    ROOT: "/dashboard",
    ADMIN: "/dashboard/admin",
  },
  FORGOT: {
    ROOT: "/forgot",
    SUCCESS: "/forgot/success",
  },
  FILOSOFY: "/filosofy",
  PROFILE: "/profile",
  NOT_FOUND: "/404",
} as const;

type AppRoutes = typeof APP_ROUTES;
export type RouteType = {
  [K in keyof AppRoutes]: AppRoutes[K] extends string
    ? AppRoutes[K]
    : {
        [SubK in keyof AppRoutes[K]]: AppRoutes[K][SubK];
      }[keyof AppRoutes[K]];
}[keyof AppRoutes];
