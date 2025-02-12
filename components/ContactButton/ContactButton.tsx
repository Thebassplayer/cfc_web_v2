import { APP_ROUTES } from "@/constants/routes";
import Link from "next/link";
import React from "react";

type ContactButtonProps = {
  text: string;
  size?: "sm" | "md" | "lg";
};

const ContactButton = ({ text, size = "sm" }: ContactButtonProps) => {
  return (
    <Link
      href={APP_ROUTES.CONTACT}
      title="Quiero saber mas"
      className="w-full rounded-md bg-primary-yellow px-4 py-2 text-center font-roboto font-semibold text-purple-dark hover:scale-105 active:bg-purple-dark active:text-primary-yellow lg:mt-4 lg:justify-self-center"
    >
      {text}
    </Link>
  );
};

export default ContactButton;
