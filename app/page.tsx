import HeroOne from "@/components/HeroOne/HeroOne";
import HeroTwo from "@/components/HeroTwo/HeroTwo";

export default function Home() {
  return (
    <main className="row-start-2 row-end-13 h-full overflow-y-auto">
      <HeroOne />
      <HeroTwo />
    </main>
  );
}
