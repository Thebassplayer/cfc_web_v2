"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ClaudiaRucci from "../../assets/testimonies/claudiaRucci.webp";
import DanielaManfredi from "../../assets/testimonies/danielamanfredi.webp";
import JuanIgnacioSuardi from "../../assets/testimonies/juanignaciosuardi.webp";
import MariaCeciliaMaldonado from "../../assets/testimonies/mariaceciliamaldonado.webp";
import MariaPodesta from "../../assets/testimonies/mariapodesta.webp";
import NataliaWolf from "../../assets/testimonies/nataliawolf.webp";
import PiaDelBono from "../../assets/testimonies/piadelbono.webp";

const testimonies = [
  {
    id: 1,
    img: ClaudiaRucci,
    name: "Claudia Rucci",
    age: 55,
    testimony:
      "Mi práctica de Ashtanga Yoga ha crecido en fuerza y flexibilidad, además de alcanzar posturas como el paro de manos con facilidad y confianza. Súper profesional y cuidada su enseñanza, una guía clave para crear conciencia y hacer crecer la inteligencia del cuerpo.",
  },
  {
    id: 2,
    img: NataliaWolf,
    name: "Natalia Wolf",
    age: 49,
    testimony:
      "Hace 6 meses que practico en CFC con el objetivo de mejorar mi práctica de Ashtanga  y estoy impresionada con los cambios que logre. Estoy feliz de haber conocido a las chicas y creo que esta disciplina es un camino de ida. No me gusta entrenar en gimnasios y acá encontré un espacio espectacular con gente hermosa, las súper recomiendo!",
  },
  {
    id: 3,
    img: JuanIgnacioSuardi,
    name: "Juan Ignacio Suardi",
    age: 25,
    testimony:
      "La práctica me permitió abrir mis ojos internos y habitar nuevos espacios en mi propio templo. Es impresionante como amplié mi rango de movimiento. Éste beneficio repercutió en todos mis entrenamientos y en mi salud en general. Me encuentro infinitamente agradecido.",
  },
  {
    id: 4,
    img: DanielaManfredi,
    name: "Daniela Manfredi",
    age: 34,
    testimony:
      "Hace 5 años me adentré en esta experiencia de habitar mi propio cuerpo. Registrar los procesos que me llevan a explorar distintos movimientos, siendo consciente de mis propias barreras, limitaciones y fortalezas.Y descubrir así la importancia de tener CONCIENCIA CORPORAL. ♡",
  },
  {
    id: 5,
    img: MariaPodesta,
    name: "María Podesta",
    age: 33,
    testimony:
      "Durante muchos años conviví con el dolor hasta que el pole me hizo darme cuenta de que tenía que trabajarlo. Comenzamos las clases de manera online y mes a mes ese dolor iba desapareciendo, cada vez adquiría más herramientas para entender mejor mi cuerpo y mis tiempos.",
  },
  {
    id: 6,
    img: PiaDelBono,
    name: "Pia Del Bono",
    age: 50,
    testimony:
      "Empecé a entrenar hace un año y medio. Llevaba más de 10 sin hacer actividad física, tiempo en el que había perdido toda la movilidad y flexibilidad. Cuando inicié este recorrido jamás imaginé que cada clase iba a representar un avance, que -a su vez- me iba a permitir entender mi cuerpo, concientizarlo y expandirlo para seguir avanzando.",
  },
  {
    id: 7,
    img: MariaCeciliaMaldonado,
    name: "Maria Cecilia Maldonado",
    age: 37,
    testimony:
      "Entrenar Conciencia y Flexibilidad Corporal no es sólo una práctica en sí misma, sino también un gran soporte y complemento de mi profesión y de mi vida. En su guía paso a paso y logre posturas que creía imposibles.",
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

const TestimonialsCarousell = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length,
    );
  };

  return (
    <div className="flex grow flex-col items-center justify-center">
      <div className="relative">
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
            <div className="w-full lg:w-1/2">
              <Image
                src={testimonies[currentIndex].img || "/placeholder.svg"}
                alt={testimonies[currentIndex].name}
                className="w-full object-scale-down"
              />
            </div>
            <div className="flex w-full flex-col justify-end pb-8 lg:w-1/2 lg:pl-8">
              <h2 className="my-4 font-sifonn text-2xl leading-none text-purple-primary lg:mt-0">
                {testimonies[currentIndex].name}
              </h2>
              <p className="mb-4 font-sifonn text-xl leading-none text-purple-primary">
                {testimonies[currentIndex].age} años
              </p>
              <p className="text-lg">{testimonies[currentIndex].testimony}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-purple-primary p-2 text-white"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-purple-primary p-2 text-white"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="mt-8 flex justify-center space-x-2">
        {testimonies.map((_, index) => (
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

export default TestimonialsCarousell;
