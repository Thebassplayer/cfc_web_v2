import PortadaDesktop from "@/assets/imagen-portada.png";
import PortadaMovile from "@/assets/fondo-hero1-mobile.png";
import Image from "next/image";
import Link from "next/link";
import { APP_ROUTES } from "@/constants/routes";

const HeroOne = () => {
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
            conociendo y expandiendo tu fuerza y flexibilidad
          </p>
          <div className="flex w-full lg:block">
            <Link
              href={APP_ROUTES.CONTACT}
              title="Quiero saber mas"
              className="w-full rounded-md bg-primary-yellow px-4 py-2 text-center font-roboto font-semibold text-purple-dark hover:scale-105 active:bg-purple-dark active:text-primary-yellow lg:mt-4 lg:justify-self-center"
            >
              Quiero saber mas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
