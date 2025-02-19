import { QuienesSomosCarousell } from "../QuienesSomosCarousell/QuienesSomosCarousell";
import SectionFrame from "../SectionFrame/SectionFrame";

export const HeroQuienesSomos = () => {
  return (
    <SectionFrame className="flex flex-col bg-purple-extralight lg:flex lg:flex-col">
      <h1 className="col-span-2 mb-8 font-sifonn text-4xl leading-none lg:text-5xl">
        <span className="mr-2 text-primary-yellow">¿Quienes</span>
        <span className="text-primary-white">Somos?</span>
      </h1>

      <QuienesSomosCarousell />
    </SectionFrame>
  );
};
