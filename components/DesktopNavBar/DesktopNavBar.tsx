import React from "react";
import Logo from "@/assets/Logo1.svg";
import Image from "next/image";
import NavBarButton from "../NavBarButton/NavBarButton";
import Link from "next/link";
import { cm } from "@/utils/classMerge";
import { APP_ROUTES } from "@/constants/routes";

type DesktopNavBarProps = {
  className?: string;
};

export default async function DesktopNavBar({ className }: DesktopNavBarProps) {
  return (
    <nav
      className={cm(
        "hidden h-full w-full flex-row items-center justify-between border-b-2 border-black bg-purple-extralight px-28 py-2 shadow-xl lg:flex",
        className,
      )}
    >
      <div className="flex items-start">
        <Link href={APP_ROUTES.HOME}>
          <Image src={Logo} alt="LOGO" height={80} />
        </Link>
      </div>
      <NavBarButton path={APP_ROUTES.CONTACT} text="Contacto" />
    </nav>
  );
}
