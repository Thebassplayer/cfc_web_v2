"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import ContactForm from "../ContactForm/ContactForm";

const ContactModal = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchModal = searchParams.get("search-modal");
  return (
    <>
      {searchModal && (
        <Link href={pathname} className="fixed inset-0 z-50 cursor-default">
          <div
            className="fixed left-1/2 z-50 flex h-screen w-screen -translate-x-1/2 justify-center bg-black bg-opacity-50 py-20"
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-modal-title"
          >
            <ContactForm />
          </div>
        </Link>
      )}
    </>
  );
};

export default ContactModal;
