import PortadaDesktop from "@/assets/imagen-portada.png";
import PortadaMovile from "@/assets/fondo-hero1-mobile.png";
import Image from "next/image";
import ContactButton from "../ContactButton/ContactButton";

export const HeroPortada = () => {
  return (
    <section className="relative grid h-full w-full grid-rows-12 overflow-hidden bg-purple-extralight lg:flex lg:grow lg:flex-col lg:px-28">
      <div className="row-span-7 row-start-1 flex w-full items-center justify-center p-2 lg:absolute lg:right-8 lg:top-0 lg:h-full">
        <Image src={PortadaDesktop} alt="Portada" className="hidden lg:block" />
        <Image
          src={PortadaMovile}
          alt="Portada"
          className="h-full object-contain lg:hidden"
        />
      </div>
      <div className="lg:z-10 lg:grid lg:h-full lg:grid-rows-2">
        <div className="w-full px-4 pt-4 lg:row-start-2 lg:w-fit lg:pl-16">
          <div className="pb-2">
            <p className="font-sifonn text-3xl uppercase leading-none text-primary-white lg:text-5xl">
              Conecta con
            </p>
            <p className="font-sifonn text-3xl uppercase leading-none text-primary-white lg:text-5xl">
              tu cuerpo
            </p>
          </div>
          <p className="pb-2 font-bebas text-2xl uppercase leading-none tracking-wide text-black">
            Reconoce y supera tus límites a través del movimiento consciente
          </p>
          <div className="flex w-full lg:block">
            <ContactButton text={"Quiero saber mas"} />
          </div>
        </div>
      </div>
    </section>
  );
};
