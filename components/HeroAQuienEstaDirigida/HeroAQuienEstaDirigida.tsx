"use client";
import HeroThreeCard from "../HeroThreeCard/HeroThreeCard";
import Lautaro from "@/assets/Lautaro.jpg";
import Ajustes from "@/assets/ajuste.jpg";
import AlbuMili from "@/assets/albu-mili-1.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionFrame from "../SectionFrame/SectionFrame";

const cards = [
  {
    image: Lautaro,
    title:
      "Movedores, bailarines, deportistas - principiantes, intermedios y avanzados",
    text: "En CFC, nuestro objetivo es desarrollar las capacidades físicas y la autoconciencia de cada individuo. Acompañamos a todos en su proceso, sin importar su punto de partida. Potenciamos la práctica de quienes investigan el movimiento, brindándoles herramientas para mejorar y ampliar sus recursos.",
  },
  {
    image: Ajustes,
    title: "Personas con tendencias a patologías posturales",
    text: "Con una gran conciencia, apelamos a la reeducación postural a través de trabajos específicos de fuerza y flexibilidad. Nuestra metodología busca corregir y prevenir desequilibrios posturales, promoviendo una alineación saludable y funcional.",
  },
  {
    image: AlbuMili,
    title:
      "Personas interesadas en conocerse a través de la experiencia corporal",
    text: "CFC propone un espacio de aprendizaje y escucha que se extiende a muchas áreas de nuestras vidas. Creemos que el cuerpo es nuestro vehículo, y es fundamental conocerlo y cuidarlo. A través de la experiencia corporal, fomentamos un autoconocimiento profundo que beneficia tanto al bienestar físico como emocional.",
  },
];

const variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
  }),
};

export const HeroAQuienEstaDirigida = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length,
    );
  };
  return (
    <SectionFrame className="flex flex-col bg-grey-light lg:grid lg:grid-cols-3 lg:grid-rows-5">
      <div className="row-start-1 hidden flex-col text-5xl md:col-start-1 md:flex md:pb-10">
        <h1 className="my-0 font-sifonn leading-none text-purple-primary">
          ¿A
          <span className="text-primary-yellow"> quien</span>
        </h1>
        <h1 className="my-0 font-sifonn leading-none text-purple-primary">
          esta dirigida
        </h1>
        <h1 className="my-0 font-sifonn leading-none text-purple-primary">
          la practica?
        </h1>
      </div>
      <h1 className="my-0 font-sifonn text-3xl leading-none text-purple-primary md:hidden">
        ¿A <span className="text-primary-yellow"> quien</span> esta dirigida la
        practica?
      </h1>
      <div className="row-span-4 row-start-2 hidden justify-evenly py-2 lg:col-start-1 lg:col-end-4 lg:flex lg:flex-row lg:justify-center">
        {cards.map((card) => (
          <HeroThreeCard
            key={card.title}
            image={card.image}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
      <div className="flex min-h-0 flex-1 flex-col items-center justify-between lg:hidden">
        <div className="relative grow overflow-y-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="lg:flex"
            >
              <div className="mx-12 flex flex-1 grow flex-col pt-4 md:mx-24">
                <Image
                  src={cards[currentIndex].image}
                  alt={cards[currentIndex].title}
                  className="mb-8 aspect-square w-full rounded-2xl object-cover shadow-md shadow-black"
                />
                <div className="flex grow flex-col justify-between">
                  <div className="flex grow flex-col justify-between">
                    <h2 className="pb-2 font-bebas text-2xl leading-none text-purple-light lg:text-2xl">
                      {cards[currentIndex].title}
                    </h2>
                    <p className="max-h-24 overflow-y-scroll pb-2 text-xs lg:text-sm">
                      {cards[currentIndex].text}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={"?search-modal=true"}
                      title="Quiero saber mas"
                      className="text-sm text-purple-light hover:underline lg:text-lg"
                    >
                      Mas Info
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-purple-primary p-2 text-white transition-transform hover:scale-105 active:scale-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-purple-primary p-2 text-white transition-transform hover:scale-105 active:scale-100"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="mt-8 flex justify-center space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-purple-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionFrame>
  );
};
