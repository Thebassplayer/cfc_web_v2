"use client";
import React, { use, useEffect, useRef, useState } from "react";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { cm } from "@/utils/classMerge";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import HamburgerMenuButton from "./HamburgerMenuButton/HamburgerMenuButto";
import { NavBarButtonProps } from "@/types";
import { usePathname } from "next/navigation";

type HamburgerMenuProps = {
  children: React.ReactNode;
  user: User | null;
};

const MOBILE_NAV_BAR_BUTTONS: NavBarButtonProps[] = [
  { path: "/", text: "Inicio" },
  { path: "/filosofia", text: "Filosofia" },
  { path: "/contacto", text: "Contacto" },
];

const HamburgerMenu = ({ children, user }: HamburgerMenuProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsOpen(false);
    console.log("Pathname changed:", pathname);
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
          {user ? (
            <>
              <HamburgerMenuButton
                href={"/dashboard"}
                text={"Mis Clases"}
                onClick={toggleNavMenu}
              />
              {children}
            </>
          ) : (
            <HamburgerMenuButton
              href={"/login"}
              text={"Ingrasar"}
              onClick={toggleNavMenu}
            />
          )}
        </ul>
      )}
      <HamburgerButton buttonRef={buttonRef} toggleNavMenu={toggleNavMenu} />
    </div>
  );
};

export default HamburgerMenu;
