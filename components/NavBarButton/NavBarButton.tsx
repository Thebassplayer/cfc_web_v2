"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cm } from "@/utils/classMerge";

type NavBarButtonProps = {
  path: string;
  text: string;
};

const NavBarButton = ({ path, text }: NavBarButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <li>
      <Link
        href={path}
        className={cm(
          "font-sifonn text-2xl uppercase text-white decoration-2 hover:underline",
          isActive ? "underline" : "",
        )}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavBarButton;
