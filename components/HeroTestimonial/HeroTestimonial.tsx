import SectionFrame from "../SectionFrame/SectionFrame";
import TestimonialsCarousell from "../TestimonialsCarousell/TestimonialsCarousell";
import TitleWithLine from "../TitleWithLine/TitleWithLine";

export const HeroTestimonial = () => {
  return (
    <SectionFrame className="flex h-auto flex-col bg-grey-light lg:flex lg:flex-col">
      <TitleWithLine text="Testimonios" />
      <div className="flex grow flex-col items-center justify-center">
        <TestimonialsCarousell />
      </div>
    </SectionFrame>
  );
};
