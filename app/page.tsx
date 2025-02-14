import { HeroTestimonial } from "@/components/HeroTestimonial/HeroTestimonial";
import { HeroPilares } from "@/components/HeroPilares/HeroPilares";
import { HeroPortada } from "@/components/HeroPortada/HeroPortada";
import { HeroBeneficios } from "@/components/HeroBeneficios/HeroBeneficios";
import { HeroAQuienEstaDirigida } from "@/components/HeroAQuienEstaDirigida/HeroAQuienEstaDirigida";
import { HeroEstudiaAnatomia } from "@/components/HeroEstudiaAnatomia/HeroEstudiaAnatomia";
import { HeroQuienesSomos } from "@/components/HeroQuienesSomos/HeroQuienesSomos";
import { HeroNuestroEquipo } from "@/components/HeroNuestroEquipo/HeroNuestroEquipo";
import { HeroElPoderDelEquipo } from "@/components/HeroElPoderDelEquipo/HeroElPoderDelEquipo";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <HeroPortada />
      <HeroEstudiaAnatomia />
      <HeroAQuienEstaDirigida />
      <HeroPilares />
      <HeroTestimonial />
      <HeroBeneficios />
      <HeroQuienesSomos />
      <HeroNuestroEquipo />
      <HeroElPoderDelEquipo />
      <Footer />
    </>
  );
}
