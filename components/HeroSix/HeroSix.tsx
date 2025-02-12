import ConoceYExpandeTuFuerza from "../../assets/conoce_y_expande_tu_fuerza.jpg";
import Image from "next/image";
const HeroSix = () => {
  return (
    <section className="grid h-full grid-rows-3 p-4 lg:flex lg:flex-col lg:px-28 lg:py-7">
      <div className="relative h-1/2">
        <Image
          src={ConoceYExpandeTuFuerza}
          alt="Mujer en Flecha"
          className="absolute my-8 h-full object-scale-down "
        />
      </div>
    </section>
  );
};

export default HeroSix;
