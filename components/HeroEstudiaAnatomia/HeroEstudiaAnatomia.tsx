import SectionFrame from "../SectionFrame/SectionFrame";

export const HeroEstudiaAnatomia = () => {
  return (
    <SectionFrame className="flex h-auto flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2">
      <div className="row-start-1 flex flex-col justify-evenly pb-8 lg:col-start-1 lg:pb-0">
        <h1 className="font-sifonn text-3xl leading-none text-purple-primary lg:text-4xl">
          “Estudia anatomía y transforma tu conexión cuerpo-mente con CFC
          Conciencia y Flexibilidad Corporal®”
        </h1>
        <div className="my-2 h-2 w-2/5 bg-primary-yellow"></div>
      </div>
      <div className="row-span-2 row-start-2 flex flex-col gap-8 py-2 lg:col-start-1 lg:col-end-3 lg:flex-row lg:justify-center">
        <div className="flex flex-col justify-evenly lg:block lg:w-1/2 lg:px-4">
          <h1 className="pb-4 font-bebas text-2xl leading-none text-purple-light">
            “Construye una base fuerte y flexible con nuestro método”
          </h1>
          <p className="text-xs lg:text-base">
            Sumergite en el conocimiento anatómico y descubre cómo puede
            transformar tu práctica. En CFC, te brindamos herramientas para
            entender el funcionamiento de tu organismo desde una perspectiva
            científica e integral. Esta comprensión hará que puedas optimizar
            los movimientos y cultivar una conexión profunda entre cuerpo y
            mente.
          </p>
        </div>
        <div className="flex flex-col justify-evenly lg:block lg:w-1/2 lg:px-4">
          <h1 className="pb-4 font-bebas text-2xl leading-none text-purple-light">
            ¿Qué es y para qué sirve?
          </h1>
          <p className="mb-4 text-xs lg:text-base">
            Conciencia y Flexibilidad Corporal ® (CFC) es un método que toma
            recursos de varias disciplinas del movimiento y el autoconocimiento.
            Fue creado para acompañar a las personas en el desarrollo del
            registro propioceptivo, la flexibilidad, la fuerza y la
            auto-consciencia.
          </p>
          <p className="text-xs lg:text-base">
            Esta metodología contribuye al incremento de las capacidades en los
            términos antes mencionados, además de prevenir y acompañar a los
            cuerpos en sus procesos (véase prevención de riesgos lesivos,
            recuperación, reeducación postural, mejoramiento de las habilidades
            deportivas, etc.).
          </p>
        </div>
      </div>
    </SectionFrame>
  );
};
