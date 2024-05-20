import Portada from "@/assets/imagen-portada.png";
import Image from "next/image";

const HeroTwo = () => {
  return (
    <section className="grid grid-cols-2 grid-rows-2 px-28 py-14">
      <div className="col-start-1 row-start-1 pb-14">
        <h1 className="font-sifonn text-purple-primary text-5xl leading-none">
          El momento para vivir tu experiencia corporal consciente, es ahora.
        </h1>
      </div>
      <div className="col-start-1 col-end-3 row-start-2 flex flex-row justify-center py-2">
        <div className="w-1/2">
          <h1 className="font-bebas text-purple-light text-2xl">
            Conciencia y Flexibilidad Corporal ® como estilo de vida.
          </h1>
          <p>
            En CFC la propuesta es reconocer las posibilidades que tiene tu
            cuerpo y expandirlas, integrando los aspectos mentales y emocionales
            de aquello que se mueve cuando nos movemos.
          </p>
        </div>
        <div className="w-1/2">
          <h1 className="font-bebas text-purple-light text-2xl">
            La aceptación incondicional de tu posibilidad actual te abre las
            puertas a desarrollar tus capacidades.
          </h1>
          <p>
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
