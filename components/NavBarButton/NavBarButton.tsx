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
    <Link
      href={path}
      className={cm(
        "m-0 font-sifonn text-xl uppercase text-white decoration-2 hover:underline",
        isActive ? "underline" : "",
      )}
    >
      {text}
    </Link>
  );
};

export default NavBarButton;
