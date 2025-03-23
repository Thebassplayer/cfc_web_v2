"use client";

import Link from "next/link";

type WhatsappButtonProps = {
  children: React.ReactNode;
};

if (!process.env.NEXT_PUBLIC_PHONE_NUMBER) {
  throw new Error("NEXT_PUBLIC_PHONE_NUMBER is not defined");
}

const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;

const WhatsappButton = ({ children }: WhatsappButtonProps) => {
  const messageText = encodeURIComponent(
    "Hola, quisiera recibir mas informacion sobre el metodo CFC",
  );
  const url = `https://wa.me/${phoneNumber}?text=${messageText}`;

  return (
    <Link href={url} target="_blank">
      {children}
    </Link>
  );
};

export default WhatsappButton;
