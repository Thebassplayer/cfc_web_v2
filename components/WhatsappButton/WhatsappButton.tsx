"use client";

import Link from "next/link";

type WhatsappButtonProps = {
  children: React.ReactNode;
};

const WhatsappButton = ({ children }: WhatsappButtonProps) => {
  const messageText = encodeURIComponent(
    "Hola, quisiera recibir mas informacion sobre el metodo CFC",
  );
  const url = `https://wa.me/message/R3VJ7UUOCORRO1`;

  return (
    <Link href={url} target="_blank">
      {children}
    </Link>
  );
};

export default WhatsappButton;
