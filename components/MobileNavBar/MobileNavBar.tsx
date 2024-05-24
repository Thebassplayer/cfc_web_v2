import React from "react";
import Logo from "@/assets/Logo1.svg";
import Image from "next/image";
import Link from "next/link";
import { cm } from "@/utils/classMerge";
import { NavBarButtonProps } from "@/types";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

type MobileNavBarProps = {
  className?: string;
};

const NAV_BAR_BUTTONS: NavBarButtonProps[] = [
  { path: "/", text: "Inicio" },
  { path: "/filosofia", text: "Filosofia" },
  { path: "/contacto", text: "Contacto" },
];

const MobileNavBar = ({ className }: MobileNavBarProps) => {
  return (
    <nav
      className={cm(
        "flex h-full w-full flex-row items-center justify-between border-b-2 border-black bg-purple-extralight px-4 py-2 shadow-xl lg:hidden",
        className,
      )}
    >
      <div className="flex items-start">
        <Link href={"/"}>
          <Image src={Logo} alt="LOGO" height={40} />
        </Link>
      </div>
      <HamburgerMenu />
    </nav>
  );
};

export default MobileNavBar;
