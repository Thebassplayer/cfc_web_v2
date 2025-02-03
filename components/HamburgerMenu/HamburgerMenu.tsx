"use client";
import React, { useEffect, useRef, useState } from "react";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { cm } from "@/utils/classMerge";
import HamburgerMenuButton from "./HamburgerMenuButton/HamburgerMenuButton";
import { NavBarButtonProps } from "@/types";
import { usePathname } from "next/navigation";
import { APP_ROUTES } from "@/constants/routes";

type HamburgerMenuProps = {
  children: React.ReactNode;
  user: boolean;
  role: "user" | "admin" | "super_admin" | null;
};

const MOBILE_NAV_BAR_BUTTONS: NavBarButtonProps[] = [
  { path: APP_ROUTES.CONTACT, text: "Contacto" },
];

const HamburgerMenu = ({ children, user, role }: HamburgerMenuProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleNavMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {isOpen && (
        <ul
          ref={menuRef}
          className={cm(
            "absolute right-0 top-10 z-50 flex flex-col border-2 border-black bg-white shadow-lg *:font-roboto *:font-bold",
          )}
        >
          {MOBILE_NAV_BAR_BUTTONS.map(({ path, text }) => (
            <HamburgerMenuButton
              key={`${path}-${text}`}
              href={path}
              text={text}
              onClick={toggleNavMenu}
            />
          ))}
        </ul>
      )}
      <HamburgerButton buttonRef={buttonRef} toggleNavMenu={toggleNavMenu} />
    </div>
  );
};

export default HamburgerMenu;
