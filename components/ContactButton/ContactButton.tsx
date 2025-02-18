import { APP_ROUTES } from "@/constants/routes";
import { cm } from "@/utils/classMerge";
import Link from "next/link";
import React from "react";

type ContactButtonProps = {
  text: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-base px-4 py-2",
  md: "text-xl px-6 py-3",
  lg: "text-2xl px-8 py-4",
};

const ContactButton = ({ text, size = "sm" }: ContactButtonProps) => {
  return (
    <Link href={"?search-modal=true"} title={text}>
      <div
        className={cm(
          "w-fit rounded-md bg-primary-yellow text-center font-roboto font-semibold text-purple-primary transition-transform hover:scale-105 active:scale-100 active:bg-purple-primary active:text-primary-yellow",
          sizes[size],
        )}
      >
        {text}
      </div>
    </Link>
  );
};

export default ContactButton;
