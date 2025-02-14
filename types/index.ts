import { RouteType } from "@/constants/routes";

type NavBarButtonProps = {
  path: string;
  text: string;
};

type SearchParamsMessage = { message?: string; error?: string };

export type { NavBarButtonProps, SearchParamsMessage };
