"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ClaudiaRucci from "../../assets/testimonies/claudiaRucci.jpeg";
import DanielaManfredi from "../../assets/testimonies/danielamanfredi.webp";
import JuanIgnacioSuardi from "../../assets/testimonies/juanignaciosuardi.webp";
import MariaCeciliaMaldonado from "../../assets/testimonies/mariaceciliamaldonado.webp";
import MariaPodesta from "../../assets/testimonies/mariapodesta.webp";
import NataliaWolf from "../../assets/testimonies/nataliawolf.webp";
import PiaDelBono from "../../assets/testimonies/piadelbono.webp";
import DiegoDeLuca from "../../assets/testimonies/diegoDeluca.jpeg";
import DaianaMontenegro from "../../assets/testimonies/daianaMontenegro.jpeg";
import InesBarros from "../../assets/testimonies/inesBarros.jpeg";

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
  {
    id: 8,
    img: DiegoDeLuca,
    name: "Diego De Luca",
    age: 37,
    testimony:
      "Luego de varias lesiones, hace ya mas de un año que encontré en el método CFC y su equipo el acompañamiento que buscaba, no solo para recuperar la seguridad y confianza en mi cuerpo, sino también, para expandir la libertad de movimiento, aumentar mi fuerza y flexibilidad.",
  },
  {
    id: 9,
    img: DaianaMontenegro,
    name: "Daiana Montenegro",
    age: 24,
    testimony:
      "El primer año de formación en CFC me acompañó en mi camino de autoconocimiento. Aprendí sobre la composición y el funcionamiento de nuestro cuerpo. Comprenderme me ayudó a ser más consciente de mis movimientos, lo que potenció mis prácticas al punto de sorprenderme con lo que estaba habilitando y logrando. CFC me brindó herramientas para conectar conmigo misma y elegir lo que me hace bien: sentirme segura al moverme y al guiar a otros, priorizar mis entrenamientos, mis descansos, mi alimentación y mis cuidados, entre muchas otras cosas del día a día.¿Podríamos decir que CFC es un estilo de vida? ¡Sí, podemos!.¡CFC es una experiencia completa y poderosa!",
  },
  {
    id: 10,
    img: InesBarros,
    name: "Ines Barros",
    age: 24,
    testimony:
      "Practicar CONCIENCIA, FUERZA y FLEXIBILIDAD CORPORAL es registrar lo que me ocurre aquí y ahora. Me invita a detenerme, escuchar cómo me siento dentro de mi cuerpo y revisar lo que luego se proyecta hacia afuera, en mi modo de ESTAR. Me propone adentrarme poco a poco en mi cuerpo y, en cada ejercicio, postura o secuencia, encontrar el punto justo entre desafiarme sin romperme y soltarme sin rendirme.",
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
            className="mx-12 lg:mx-0 lg:flex"
          >
            <div className="w-full lg:w-1/2">
              <Image
                src={testimonies[currentIndex].img || "/placeholder.svg"}
                alt={testimonies[currentIndex].name}
                className="w-full rounded-sm object-scale-down"
              />
            </div>
            <div className="flex w-full flex-col justify-end lg:w-1/2 lg:justify-center lg:px-8 lg:pb-8">
              <h2 className="my-4 font-sifonn text-2xl leading-none text-purple-primary lg:mt-0">
                {testimonies[currentIndex].name}
              </h2>
              <p className="mb-4 font-sifonn text-xl leading-none text-purple-primary">
                {testimonies[currentIndex].age} años
              </p>
              <p className="h-24 overflow-y-auto pr-2 text-xs lg:max-h-full lg:text-base">
                {testimonies[currentIndex].testimony}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          type="button"
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-purple-primary p-2 text-white transition-transform hover:scale-105 active:scale-100"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-purple-primary p-2 text-white transition-transform hover:scale-105 active:scale-100"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex justify-center space-x-2 py-4">
        {testimonies.map((_, index) => (
          <button
            type="button"
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
