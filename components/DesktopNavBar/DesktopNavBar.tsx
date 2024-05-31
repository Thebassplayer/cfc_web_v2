import React from "react";
import Logo from "@/assets/Logo1.svg";
import Image from "next/image";
import NavBarButton from "../NavBarButton/NavBarButton";
import Link from "next/link";
import AuthButton from "../AuthButton/AuthButton";
import { cm } from "@/utils/classMerge";
import { NavBarButtonProps } from "@/types";
import { APP_ROUTES } from "@/constants/routes";

type DesktopNavBarProps = {
  className?: string;
};

export const NAV_BAR_BUTTONS: NavBarButtonProps[] = [
  { path: APP_ROUTES.HOME, text: "Inicio" },
  { path: APP_ROUTES.FILOSOFY, text: "Filosofia" },
  { path: APP_ROUTES.CONTACT, text: "Contacto" },
];

const DesktopNavBar = ({ className }: DesktopNavBarProps) => {
  return (
    <nav
      className={cm(
        "hidden h-full w-full flex-row items-center border-b-2  border-black bg-purple-extralight px-28 py-2 shadow-xl lg:flex",
        className,
      )}
    >
      <div className="flex items-start">
        <Link href={APP_ROUTES.HOME}>
          <Image src={Logo} alt="LOGO" height={80} />
        </Link>
      </div>
      <ul className="flex w-full grow justify-center gap-8">
        {NAV_BAR_BUTTONS.map(({ path, text }) => (
          <NavBarButton key={`${path}-${text}`} path={path} text={text} />
        ))}
      </ul>
      <AuthButton />
    </nav>
  );
};

export default DesktopNavBar;
