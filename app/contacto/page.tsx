"use client";
import ContactForm from "@/components/ContactForm/ContactForm";

const Contacto = () => {
  return (
    <div className="m-auto grid h-full grid-rows-12 gap-2 px-8 sm:max-w-md lg:max-w-2xl">
      <h1 className="row-span-1 row-start-2 text-center font-sifonn text-4xl">
        Contacto
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contacto;
