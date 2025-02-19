import PortadaDesktop from "@/assets/portada_desktop.png";
import PortadaMovile from "@/assets/portada_mobile.png";
import Image from "next/image";
import ContactButton from "../ContactButton/ContactButton";

export const HeroPortada = () => {
  return (
    <section className="relative grid h-full w-full grid-rows-12 overflow-hidden bg-purple-extralight lg:flex lg:grow lg:flex-col lg:px-28">
      <div className="row-span-7 row-start-1 flex w-full items-center justify-center p-2 lg:absolute lg:right-8 lg:top-0 lg:h-full">
        <Image
          src={PortadaDesktop}
          alt="Portada"
          className="hidden object-scale-down lg:block"
        />
        <Image
          src={PortadaMovile}
          alt="Portada"
          className="h-full object-contain lg:hidden"
        />
      </div>
      <div className="lg:z-10 lg:grid lg:h-full lg:grid-rows-2">
        <div className="w-full px-4 pt-4 lg:row-start-2 lg:w-fit lg:pl-16">
          <div className="pb-2 font-sifonn text-3xl uppercase leading-none text-primary-white lg:text-5xl">
            <p>Conecta con</p>
            <p>tu cuerpo</p>
          </div>
          <div className="pb-2 font-bebas text-lg uppercase leading-none tracking-wide text-black lg:text-2xl">
            <p>Reconoce y supera tus límites</p>
            <p className="pb-4">a través del movimiento consciente</p>
          </div>
          <div className="flex w-full lg:hidden">
            <ContactButton text={"Quiero saber mas"} size="sm" />
          </div>
          <div className="hidden w-full lg:block">
            <ContactButton text={"Quiero saber mas"} size="md" />
          </div>
        </div>
      </div>
    </section>
  );
};
