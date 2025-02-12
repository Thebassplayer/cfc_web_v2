import HeroFive from "@/components/HeroFive/HeroFive";
import HeroFour from "@/components/HeroFour/HeroFour";
import HeroOne from "@/components/HeroOne/HeroOne";
import HeroSix from "@/components/HeroSix/HeroSix";
import HeroThree from "@/components/HeroThree/HeroThree";
import HeroTwo from "@/components/HeroTwo/HeroTwo";

export default function Home() {
  return (
    <>
      <HeroOne />
      <HeroTwo />
      <HeroThree />
      <HeroFour />
      <HeroFive />
      <HeroSix />
    </>
  );
}
