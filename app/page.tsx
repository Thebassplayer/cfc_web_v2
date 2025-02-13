import { HeroTestimonial } from "@/components/HeroTestimonial/HeroTestimonial";
import HeroFour from "@/components/HeroFour/HeroFour";
import { HeroPortada } from "@/components/HeroPortada/HeroPortada";
import { HeroBeneficios } from "@/components/HeroBeneficios/HeroBeneficios";
import HeroThree from "@/components/HeroThree/HeroThree";
import { HeroEstudiaAnatomia } from "@/components/HeroEstudiaAnatomia/HeroEstudiaAnatomia";
import { HeroQuienesSomos } from "@/components/HeroQuienesSomos/HeroQuienesSomos";
import { HeroNuestroEquipo } from "@/components/HeroNuestroEquipo/HeroNuestroEquipo";
import { HeroElPoderDelEquipo } from "@/components/HeroElPoderDelEquipo/HeroElPoderDelEquipo";
import { HeroFormacion } from "@/components/HeroFormacion/HeroFormacion";

export default function Home() {
  return (
    <>
      <HeroPortada />
      <HeroEstudiaAnatomia />
      <HeroThree />
      <HeroFour />
      <HeroTestimonial />
      <HeroBeneficios />
      <HeroQuienesSomos />
      <HeroNuestroEquipo />
      <HeroElPoderDelEquipo />
      <HeroFormacion />
    </>
  );
}
