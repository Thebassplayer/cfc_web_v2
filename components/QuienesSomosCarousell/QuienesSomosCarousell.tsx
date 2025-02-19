"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Mili from "../../assets/mili.png";
import Albu from "../../assets/albana.png";
const staff = [
  {
    id: 1,
    img: Mili,
    name: "Mili",
    bio: [
      "Milagros Eva Somma es entrenadora especializada en conciencia corporal, flexibilidad y fuerza, con más de 10 años en el estudio, experimentación y desarrollo del cuerpo humano. Desde el 2018, se dedica a la enseñanza, combinando diversas técnicas y metodologías que ayudan a las personas a desarrollar un cuerpo consciente, flexible y fuerte, adaptado a sus necesidades individuales.",
      "A lo largo de su carrera, ha trabajado con una variedad de públicos, gente en busca de mejorar su bienestar físico y emocional, incluyendo deportistas, bailarines y artistas. Su interés por el estudio profundo del cuerpo humano surgió al identificar que muchas personas llegaban con dolencias, limitaciones y una desconexión con su propio cuerpo. Este fenómeno la motivó a investigar y formarse en diferentes métodos que no solo mejoran las capacidades físicas, sino también la conexión mente-cuerpo y el registro propioceptivo.",
      " Milagros ha estudiado disciplinas como el yoga, la flexibilidad, ADM, circo, barra terre, la biodescodificación, la metodología de Feldenkrais y Fedora Aberasturi.",
      "A lo largo de su trayectoria, ha sido influenciada por escuelas como Circo de las Artes, Ser Interior y Flexibilidad Segura, que fueron pilares fundamentales en su desarrollo profesional. También tomó clases y cursos con referentes del movimiento como Daniela Ortega, Sonia Marra, Paula Escobar, Patricia Ferrara y Myriam Miller, su terapeuta corporal, a quien agradece especialmente por acompañarla en su camino de autoconocimiento.",
      "El objetivo de toda esta integración y lo que se seguirá estudiando es para que la enseñanza de la conciencia corporal, la flexibilidad y la fuerza sea experimentada desde una perspectiva consciente y personalizada, utilizando herramientas que permiten a cada persona conectar con su cuerpo, ampliar sus límites y desarrollar su potencial en plenitud.",
    ],
  },
  {
    id: 2,
    img: Albu,
    name: "Albu",
    bio: [
      "Albana Hernández es entrenadora especializada en flexibilidad, fuerza y equilibrio, con más de 11 años de experiencia en el estudio y desarrollo de las capacidades del ser humano. En los últimos 5 años, ha diseñado programas de entrenamiento personalizados, centrados en la flexibilidad, la fuerza y el equilibrio, incluyendo la práctica avanzada de paradas de manos. Su enfoque integral y personalizado está dirigido a una amplia gama de personas, desde deportistas profesionales, yoguis y bailarines, hasta quienes buscan mejorar su salud y calidad de vida.",

      "A lo largo de su trayectoria, Albana ha priorizado su formación continua, completando numerosos cursos, diplomados y capacitaciones en áreas como masoterapia, técnicas de circo, Bioneuroemoción, yoga, entrenamiento de fuerza, entre otros. Además, ha tenido la oportunidad de aprender de grandes referentes del movimiento a través de talleres y clases que han enriquecido su práctica y conocimiento.",

      "Su propósito es acompañar a las personas en su búsqueda de bienestar físico, emocional y mental, ofreciendo un enfoque integral que combina los conocimientos y herramientas que ha adquirido a lo largo de su camino de desarrollo personal y profesional. Más que un entrenamiento, Albana busca brindar una experiencia transformadora que permita a cada individuo desarrollar su cuerpo y mente de manera armónica y consciente, siempre adaptándose a las necesidades y objetivos particulares de cada persona.",
    ],
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

export const QuienesSomosCarousell = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % staff.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + staff.length) % staff.length,
    );
  };

  return (
    <div className="flex h-3/4 grow flex-col items-center justify-center">
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="h-full flex-col gap-8 lg:flex lg:flex-row lg:px-32"
          >
            <div className="h-1/2 w-full lg:flex lg:h-auto lg:w-1/2">
              <Image
                src={staff[currentIndex].img || "/placeholder.svg"}
                alt={staff[currentIndex].name}
                className="h-full object-scale-down"
              />
            </div>
            <div className="flex h-1/2 w-full flex-col justify-start py-24 lg:h-full lg:w-4/6">
              <h2 className="my-4 text-center font-sifonn text-2xl leading-none text-purple-primary lg:mt-0 lg:text-left lg:text-4xl">
                {staff[currentIndex].name}
              </h2>
              <div className="overflow-y-auto">
                {staff[currentIndex].bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-4 pr-8 text-justify  text-sm text-white lg:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
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
      <div className="my-4 flex justify-center space-x-2">
        {staff.map((_, index) => (
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
  );
};
