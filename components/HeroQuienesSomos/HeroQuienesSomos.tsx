import { QuienesSomosCarousell } from "../QuienesSomosCarousell/QuienesSomosCarousell";

export const HeroQuienesSomos = () => {
  return (
    <section className="flex h-full flex-col bg-purple-extralight p-8 lg:flex lg:flex-col lg:px-28 lg:py-7">
      <h1 className="col-span-2 mb-8 font-sifonn text-4xl leading-none lg:text-5xl">
        <span className="mr-2 text-primary-yellow">¿Quienes</span>
        <span className="text-primary-white">Somos?</span>
      </h1>

      <QuienesSomosCarousell />
    </section>
  );
};
