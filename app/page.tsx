import { HeroTestimonial } from "@/components/HeroTestimonial/HeroTestimonial";
import HeroFour from "@/components/HeroFour/HeroFour";
import HeroOne from "@/components/HeroOne/HeroOne";
import { HeroBeneficios } from "@/components/HeroBeneficios/HeroBeneficios";
import HeroThree from "@/components/HeroThree/HeroThree";
import HeroTwo from "@/components/HeroTwo/HeroTwo";
import { HeroQuienesSomos } from "@/components/HeroQuienesSomos/HeroQuienesSomos";
import { HeroNuestroEquipo } from "@/components/HeroNuestroEquipo/HeroNuestroEquipo";
import { HeroElPoderDelEquipo } from "@/components/HeroElPoderDelEquipo/HeroElPoderDelEquipo";

export default function Home() {
  return (
    <>
      <HeroOne />
      <HeroTwo />
      <HeroThree />
      <HeroFour />
      <HeroTestimonial />
      <HeroBeneficios />
      <HeroQuienesSomos />
      <HeroNuestroEquipo />
      <HeroElPoderDelEquipo />
    </>
  );
}
