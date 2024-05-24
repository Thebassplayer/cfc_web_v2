"use client";
import React, { useEffect, useRef, useState } from "react";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { signOut } from "@/utils/authHandlers";
import { cm } from "@/utils/classMerge";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import Link from "next/link";

const HamburgerMenu = () => {
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
    supabase.auth.signOut();
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
            "absolute right-0 top-10 z-50 mt-2 flex flex-col gap-4 border-2 bg-white p-4 shadow-lg *:font-roboto *:font-bold",
          )}
        >
          <li>
            <Link href={"/"} onClick={() => toggleNavMenu()}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href={"/filosofia"} onClick={() => toggleNavMenu()}>
              Filosofia
            </Link>
          </li>
          <li>
            <Link href={"/contacto"} onClick={() => toggleNavMenu()}>
              Contacto
            </Link>
          </li>
          {user ? (
            <li onClick={handleLogout}>Salir</li>
          ) : (
            <li>
              <Link href={"/login"} onClick={() => toggleNavMenu()}>
                Iniciar
              </Link>
            </li>
          )}
        </ul>
      )}
      <HamburgerButton buttonRef={buttonRef} toggleNavMenu={toggleNavMenu} />
    </div>
  );
};

export default HamburgerMenu;
