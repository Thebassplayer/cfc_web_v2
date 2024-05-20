import React from "react";
import Logo from "@/assets/logo1.svg";
import Image from "next/image";
import NavBarButton from "../NavBarButton/NavBarButton";
import Link from "next/link";
import AuthButton from "../AuthButton";
import { cm } from "@/utils/classMerge";

type NavBarProps = {
  className?: string;
};

const NAV_BAR_BUTTONS = [
  { path: "/", text: "Inicio" },
  { path: "/filosofia", text: "Filosofia" },
  { path: "/contacto", text: "Contacto" },
];

const NavBar = ({ className }: NavBarProps) => {
  return (
    <nav
      className={cm(
        "bg-purple-extralight flex h-full w-full flex-row items-center border-b-2 border-black px-28 py-2 shadow-xl",
        className,
      )}
    >
      <div className="flex items-start">
        <Link href={"/"}>
          <Image src={Logo} alt="LOGO" height={80} />
        </Link>
      </div>
      <ul className="flex w-full grow justify-center gap-8">
        {NAV_BAR_BUTTONS.map(({ path, text }) => (
          <NavBarButton key={`${path}-${text}`} path={path} text={text} />
        ))}
        <AuthButton />
      </ul>
    </nav>
  );
};

export default NavBar;
