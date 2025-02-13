import ConoceBanner from "../ConoceBanner/ConoceBanner";

const HeroSix = () => {
  return (
    <section className="grid h-full grid-rows-3 p-4 lg:flex lg:flex-col lg:px-28 lg:py-7">
      <ConoceBanner />
      <div className="row-start-1 mt-8 flex flex-col justify-evenly lg:col-start-1 lg:pb-14">
        <h1 className="font-sifonn text-3xl leading-none text-purple-primary lg:text-4xl">
          BENEFICIOS DE LA PRÁCTICA
        </h1>
        <div className="my-2 h-2 w-2/5 bg-primary-yellow"></div>
      </div>
      <div className="row-span-2 row-start-2 flex flex-col justify-evenly py-2 lg:col-start-1 lg:col-end-3 lg:flex-row lg:justify-center">
        <div className="flex flex-col justify-evenly lg:block lg:w-1/3 lg:px-4">
          <h1 className="font-bebas text-2xl leading-none text-purple-light lg:pb-4">
            Beneficios físicos
          </h1>
          <ul>
            <li>1. Mejora de la flexibilidad </li>
            <li>2. Incremento de la fuerza</li>
            <li>3. Desarrollo de habilidades</li>
            <li>4. Reeducación postural </li>
            <li>5. Prevención de lesiones</li>
            <li>6. Potencia el proceso de recuperación y rehabilitación</li>
          </ul>
        </div>
        <div className="flex flex-col justify-evenly lg:block lg:w-1/3 lg:px-4">
          <h1 className="font-bebas text-2xl leading-none text-purple-light lg:pb-4">
            Beneficios mentales y emocionales
          </h1>
          <ul>
            <li>1. Aumento de la autoconciencia y autoconfianza</li>
            <li>2. Reducción del estrés y ansiedad</li>
            <li>3. Mejora de la concentración</li>
            <li>4. Aceptación del tránsito emocional</li>
          </ul>
        </div>
        <div className="flex flex-col justify-evenly lg:block lg:w-1/3 lg:px-4">
          <h1 className="font-bebas text-2xl leading-none text-purple-light lg:pb-4">
            Beneficios integrales
          </h1>
          <ul>
            <li>1. Conexión Mente-Cuerpo</li>
            <li>
              2. Desarrollo personal y profesional en caso de realizar la
              formación
            </li>
            <li>3. Calidad de vida y bienestar general</li>
            <li>
              4. En la práctica deportiva mejora el rendimiento, la técnica y la
              eficiencia
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSix;
