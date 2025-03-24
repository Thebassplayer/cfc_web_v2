import Link from "next/link";
import ConoceYExpandeTuFuerza from "../../assets/conoce_y_expande_tu_fuerza.jpg";
import Image from "next/image";
import ContactButton from "../ContactButton/ContactButton";

const ConoceBanner = () => {
  return (
    <div className="relative flex h-[400px] items-center justify-center overflow-hidden lg:h-[600px]">
      <Image
        src={ConoceYExpandeTuFuerza}
        alt="Mujer en Flecha"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="relative z-10 flex h-full w-full flex-col justify-end px-4 py-8 text-white sm:px-6 lg:px-8">
        <h1 className="shadow-text  font-sifonn text-3xl font-bold lg:text-5xl lg:leading-6">
          Conoce y expande
        </h1>
        <h1 className="shadow-text  font-sifonn text-3xl font-bold lg:text-5xl">
          tu fuerza y flexibilidad
        </h1>
        <p className="shadow-text  mb-8 font-bebas text-xl lg:text-2xl">
          Formate como instructor/a o en carácter personal
        </p>
        <div className="hidden space-x-4 lg:flex">
          <ContactButton text={"Comenzar"} size="md" />
        </div>
        <div className="space-x-4 lg:hidden">
          <ContactButton text={"Comenzar"} />
        </div>
      </div>
    </div>
  );
};

export default ConoceBanner;
