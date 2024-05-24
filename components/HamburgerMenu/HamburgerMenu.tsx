"use client";
import React, { useEffect, useRef, useState } from "react";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { signOut } from "@/utils/authHandlers";
import { cm } from "@/utils/classMerge";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";

type HamburgerMenuProps = {
  color?: "black" | "white";
};

const HamburgerMenu = ({ color = "white" }: HamburgerMenuProps) => {
  const supabase = createClient();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error(error);
      } else {
        setUser(data.user);
      }
    }
    getUser();
  }, [supabase]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleNavMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    signOut();
    setIsOpen(false);
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
            "absolute right-0 top-10 z-50 mt-2 border-2 shadow-lg",
            color === "white"
              ? "border-black bg-white text-black"
              : "border-white bg-black text-white",
          )}
        >
          {user && (
            <li
              onClick={handleLogout}
              className={cm(
                "cursor-pointer px-4 py-2 text-sm",
                color === "white"
                  ? "text-black hover:bg-black hover:text-white"
                  : "text-white hover:bg-white hover:text-black",
              )}
            >
              Salir
            </li>
          )}
        </ul>
      )}
      <HamburgerButton
        buttonRef={buttonRef}
        toggleNavMenu={toggleNavMenu}
        color={color}
      />
    </div>
  );
};

export default HamburgerMenu;
