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
    <li className="px-6 py-2 hover:bg-black hover:text-white">
      <Link href={href} onClick={() => onClick()}>
        {text}
      </Link>
    </li>
  );
};

export default HamburgerMenuButton;
