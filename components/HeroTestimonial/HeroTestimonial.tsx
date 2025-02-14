import TestimonialsCarousell from "../TestimonialsCarousell/TestimonialsCarousell";

export const HeroTestimonial = () => {
  return (
    <section className="flex h-full flex-col bg-grey-light p-4 lg:flex lg:flex-col lg:px-28">
      <h1 className="col-span-2 mt-8 text-center font-sifonn text-4xl leading-none text-purple-primary lg:text-5xl">
        TESTIMONIOS
      </h1>
      <div className="mx-auto mb-8 h-2 w-1/4 bg-primary-yellow"></div>
      <div className="flex grow flex-col items-center justify-center">
        <TestimonialsCarousell />
      </div>
    </section>
  );
};
