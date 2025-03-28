import Image from "next/image";
import Equipo from "../../assets/equipo.jpg";
import TitleWithLine from "../TitleWithLine/TitleWithLine";
import SectionFrame from "../SectionFrame/SectionFrame";

const team = [
  {
    id: 1,
    name: "Marga",
    bio: [
      "Marga es una instructora apasionada, empática y llena de alegría. Su paciencia y capacidad didáctica le permiten conectar con sus practicantes desde un lugar de comprensión y cuidado, adaptándose a las necesidades individuales de cada cuerpo.",
      "Su trayectoria incluye el instructorado de Pole Dance en los niveles básico, intermedio (2015) y avanzado (2018), así como su formación en Pilates con Paula Faccini (2020) y el método de Hipopresivos Plus (2023). A través de estas disciplinas, entiende que actividades físicas exigentes requieren no solo de fuerza y flexibilidad, sino también de paciencia, creatividad y humor para superar desafíos y construir un vínculo sólido entre profesora y practicante.",
      "Su enfoque combina herramientas de CFC y Pilates, fomentando la autopercepción y ayudando a sus alumnos a aplicar estos conceptos al Pole Dance. Inspirada por el aprendizaje de sus practicantes, encuentra su mayor satisfacción cuando observa cómo integran el conocimiento y experimentan alivio y disfrute en cada clase.",
    ],
  },
  {
    id: 2,
    name: "Lautaro",
    bio: [
      "Lautaro es un profesional dedicado y detallista que encuentra en la enseñanza un medio para compartir las técnicas más eficientes que ha descubierto a lo largo de su experiencia. Su formación en artes marciales incluye Taekwondo (cinturón negro de la Chang Moo Kwan), Jiujitsu, Capoeira y Wushu, aportándole un profundo conocimiento del movimiento y el control corporal.",
      "Además, cuenta con formación en Masoterapia (IPEF), Medicina China (formación particular y en el Instituto Chino Argentina). Su enfoque técnico y minucioso busca no solo desarrollar habilidades físicas en sus alumnos, sino también fortalecer su conexión con el cuerpo y sus capacidades.",
    ],
  },
];

export const HeroNuestroEquipo = () => {
  return (
    <SectionFrame className="flex h-auto flex-col bg-grey-light lg:flex lg:flex-col">
      <TitleWithLine text="Nuestro equipo" />
      <div className="flex grow flex-col">
        <Image
          src={Equipo}
          alt="Equipo de CFC"
          objectFit="cover"
          quality={100}
          className="mb-4 h-1/2 object-scale-down"
          priority
        />

        <div className="row-span-2 row-start-2 flex flex-col justify-evenly py-2 lg:col-start-1 lg:col-end-3 lg:flex-row lg:justify-center">
          {team.map((el, idx) => (
            <div
              className="flex flex-col justify-evenly lg:block lg:w-1/2 lg:px-4"
              key={idx}
            >
              <h1 className="pb-4 font-bebas text-2xl leading-none text-purple-light">
                {el.name}
              </h1>
              {el.bio.map((par, idx) => (
                <p className="mb-4 text-xs lg:text-base" key={idx}>
                  {par}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
};
