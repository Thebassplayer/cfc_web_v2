import TestimonialsCarousell from "../TestimonialsCarousell/TestimonialsCarousell";

const TestimonialCarousel = () => {
  return (
    <section className="flex h-full flex-col bg-grey-light p-4 lg:flex lg:flex-col lg:px-28 lg:py-7">
      <div className="mx-auto mb-16 mt-2 h-2 w-1/4 bg-primary-yellow"></div>
      <h1 className="col-span-2 mb-8 text-center font-sifonn text-4xl leading-none text-purple-primary lg:text-5xl">
        TESTIMONIOS
      </h1>
      <div className="flex grow flex-col items-center justify-center">
        <TestimonialsCarousell />
      </div>
    </section>
  );
};

export default TestimonialCarousel;
