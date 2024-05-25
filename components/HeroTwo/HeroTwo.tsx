import Portada from "@/assets/imagen-portada.png";
import Image from "next/image";

const HeroTwo = () => {
  return (
    <section className="grid h-full grid-rows-3 p-4 lg:grid-cols-2 lg:grid-rows-2 lg:px-28 lg:py-14">
      <div className="row-start-1 flex flex-col justify-evenly lg:col-start-1 lg:pb-14">
        <h1 className="font-sifonn text-4xl leading-none text-purple-primary lg:text-5xl">
          El momento para vivir tu experiencia corporal consciente, es ahora.
        </h1>
        <div className="my-2 h-2 w-1/2 bg-primary-yellow"></div>
      </div>
      <div className="row-span-2 row-start-2 flex flex-col justify-evenly py-2 lg:col-start-1 lg:col-end-3 lg:flex-row lg:justify-center">
        <div className="flex flex-col justify-evenly lg:block lg:w-1/2 lg:px-4">
          <h1 className="font-bebas text-2xl leading-none text-purple-light lg:pb-4">
            Conciencia y Flexibilidad Corporal ® como estilo de vida.
          </h1>
          <p className="text-sm">
            En CFC la propuesta es reconocer las posibilidades que tiene tu
            cuerpo y expandirlas, integrando los aspectos mentales y emocionales
            de aquello que se mueve cuando nos movemos.
          </p>
        </div>
        <div className="flex flex-col justify-evenly lg:block lg:w-1/2 lg:px-4">
          <h1 className="font-bebas text-2xl leading-none text-purple-light lg:pb-4">
            La aceptación incondicional de tu posibilidad actual te abre las
            puertas a desarrollar tus capacidades.
          </h1>
          <p className="text-sm">
            Aspiramos a trabajar de forma consciente para poder habitar los
            diferentes lugares que propone el método. Cada ejercicio tiene su
            progresión adaptable al nivel en el que estás.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
