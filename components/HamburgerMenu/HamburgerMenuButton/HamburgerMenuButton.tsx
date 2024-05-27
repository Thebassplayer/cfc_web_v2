import Link from "next/link";
import React from "react";

type HamburgerMenuButtonProps = {
  onClick: () => void;
  href?: string;
  text: string;
};

const HamburgerMenuButton = ({
  onClick,
  href = "#",
  text,
}: HamburgerMenuButtonProps) => {
  return (
    <Link href={href} onClick={() => onClick()}>
      <li className="px-6 py-3 text-center hover:bg-black hover:text-white">
        {text}
      </li>
    </Link>
  );
};

export default HamburgerMenuButton;
