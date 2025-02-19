import Pilares from "../../assets/pilares_del_metodo.png";
import IconOne from "../../assets/iconos-1.png";
import Icontwo from "../../assets/iconos-2.webp";
import IconThree from "../../assets/iconos-3.webp";
import IconFour from "../../assets/iconos-4.png";
import Image from "next/image";
import SectionFrame from "../SectionFrame/SectionFrame";

const pilares = [
  {
    id: 1,
    icon: IconOne,
    title: "Estudio anatómico y biomecánico",
    text: "Aprender a reconocer qué es lo que estamos moviendo, cuál es su función biológica y el propósito de la selección de ejercicios es clave para la reeducación corporal. Necesitamos abrir nuestros ojos internos y conocer nuestro organismo profundamente. Este conocimiento nos permite movernos con mayor conciencia y eficacia, promoviendo la salud y el bienestar integral.",
  },
  {
    id: 2,
    icon: Icontwo,
    title: "La postura de la emoción",
    text: "Cuando observamos un cuerpo, vemos una estructura que ha transitado por diferentes experiencias. No podemos ignorar que reflejamos a través de él nuestro estado mental y emocional. El cuerpo es un espejo de nuestras emociones y pensamientos, y su postura puede revelar mucho sobre nuestro estado interno.",
  },
  {
    id: 3,
    icon: IconThree,
    title: "¿Cuándo y por qué se creó?",
    text: "CFC surge en el año 2016, cuando Milagros Somma recibió un diagnóstico fatalista respecto a continuar con la práctica de movimiento. Apasionada por la flexibilidad, decidió comenzar una investigación corporal consciente. No solo obtuvo mejoras en su condición física, sino que también alcanzó objetivos que se suponía serían imposibles para la condición de su columna.",
  },
  {
    id: 4,
    icon: IconFour,
    title: "Trayectoria",
    text: "Como investigadoras y practicantes, a lo largo de los años hemos estudiado varias disciplinas y tomado recursos de cada una de ellas. Algunas de estas disciplinas incluyen: Metodología de Feldenkrais, Yoga, Flexibilidad y Contorsión, Barra á terre, ADM, entrenamiento de fuerza inteligente, Movement Culture, Handstand, Bioneuroemoción, entre otras.",
  },
];

export const HeroPilares = () => {
  return (
    <SectionFrame className="h-auto lg:flex lg:flex-col">
      <div className="flex h-1/5 w-full flex-col justify-center">
        <h1 className="col-span-2 text-center font-sifonn text-4xl leading-none text-purple-primary lg:text-5xl">
          Pilares de conciencia y
        </h1>
        <h1 className="col-span-2 text-center font-sifonn text-4xl leading-none text-purple-primary lg:pb-4 lg:text-5xl">
          flexibilidad corporal
        </h1>
      </div>
      <Image
        src={Pilares}
        alt="Dos mujeres sorientes, practicando CFC"
        className="my-8 object-scale-down lg:h-[700px]"
      />
      <div className="row-span-2 row-start-2 flex flex-col justify-evenly py-2 lg:flex lg:flex-row lg:justify-center">
        {pilares.map((el, idx) => (
          <div
            className="flex flex-col justify-evenly lg:block lg:w-1/4 lg:px-6"
            key={idx}
          >
            <Image
              src={el.icon}
              alt={`Icono ${el.id}`}
              className="mx-auto mb-8 size-24"
            />
            <h1 className="text-center font-bebas text-2xl leading-none text-purple-light lg:pb-4">
              {el.title}
            </h1>
            <p className="mb-4">{el.text}</p>
          </div>
        ))}
      </div>
    </SectionFrame>
  );
};
