import Portada from "@/assets/imagen-portada.png";
import Image from "next/image";
import Link from "next/link";

const HeroOne = () => {
  return (
    <section className="relative flex h-full w-full grow flex-col bg-purple-extralight px-28">
      <div className="absolute right-8 top-0 flex h-full w-full items-center justify-center">
        <Image src={Portada} alt="Portada" />
      </div>
      <div className="z-10 grid h-full grid-rows-2">
        <div className="row-start-2 w-fit pl-16 pt-4">
          <p className="font-sifonn text-5xl uppercase leading-none text-primary-white">
            Conecta con
          </p>
          <p className="font-sifonn text-5xl uppercase leading-none text-primary-white">
            tu cuerpo
          </p>
          <p className="font-bebas text-2xl uppercase tracking-wide text-black">
            conociendo y expandiendo tu fuerza y flexibilidad
          </p>

          <Link
            href={"/contacto"}
            title="Quiero saber mas"
            className="mt-4 justify-self-center rounded-md bg-primary-yellow px-4 py-2 font-roboto font-semibold text-purple-dark hover:scale-105 active:bg-purple-dark active:text-primary-yellow "
          >
            Quiero saber mas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
