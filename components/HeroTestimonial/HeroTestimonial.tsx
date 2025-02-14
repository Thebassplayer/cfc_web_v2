import TestimonialsCarousell from "../TestimonialsCarousell/TestimonialsCarousell";
import TitleWithLine from "../TitleWithLine/TitleWithLine";

export const HeroTestimonial = () => {
  return (
    <section className="flex h-full flex-col bg-grey-light p-4 lg:flex lg:flex-col lg:px-28">
      <TitleWithLine text="Testimonios" />
      <div className="flex grow flex-col items-center justify-center">
        <TestimonialsCarousell />
      </div>
    </section>
  );
};
