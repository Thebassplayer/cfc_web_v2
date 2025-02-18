import HeroThreeCard from "../HeroThreeCard/HeroThreeCard";
import Lautaro from "@/assets/Lautaro.jpg";
import Ajustes from "@/assets/ajuste.jpg";
import AlbuMili from "@/assets/albu-mili-1.jpg";

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

export const HeroAQuienEstaDirigida = () => {
  return (
    <section className="h-full grid-rows-3 bg-grey-light p-4 lg:grid lg:grid-cols-3 lg:grid-rows-5 lg:px-28 lg:py-14">
      <div className="row-start-1 flex flex-col lg:col-start-1 lg:pb-10">
        <h1 className="my-0 font-sifonn text-4xl leading-none text-purple-primary lg:text-5xl">
          ¿A
          <span className="text-primary-yellow"> quien</span>
        </h1>
        <h1 className="my-0 font-sifonn text-4xl leading-none text-purple-primary lg:text-5xl">
          esta dirigida
        </h1>
        <h1 className="my-0 font-sifonn text-4xl leading-none text-purple-primary lg:text-5xl">
          la practica?
        </h1>
      </div>
      <div className="row-span-4 row-start-2 flex flex-col justify-evenly py-2 lg:col-start-1 lg:col-end-4 lg:flex-row lg:justify-center">
        {cards.map((card) => (
          <HeroThreeCard
            key={card.title}
            image={card.image}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
};
