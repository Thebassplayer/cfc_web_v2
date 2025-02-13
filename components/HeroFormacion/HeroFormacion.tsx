export const HeroFormacion = () => {
  return (
    <section className="bg-grey-light p-4 lg:px-28 lg:py-14">
      <h1 className="text-center font-sifonn text-4xl leading-none text-purple-primary lg:text-5xl">
        FORMACIÓN
      </h1>
      <div className="mt-8 space-y-8">
        {/* Modalidad */}
        <div>
          <h2 className="mb-2 font-bebas text-2xl text-purple-light">
            Modalidad
          </h2>
          <p>
            La modalidad será <strong>100% online</strong>.
          </p>
        </div>
        {/* Horarios de las clases */}
        <div>
          <h2 className="mb-2 font-bebas text-2xl text-purple-light">
            Horarios de las clases
          </h2>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Teoría del método con Milagros y Albana:</strong> Primer y
              tercer sábado de cada mes: <strong>9:00-12:00hs (ARG)</strong>
            </li>
            <li>
              <strong>
                Fundamentos del Armado de Clases (para la opción profesional):
              </strong>{" "}
              A partir de agosto hasta noviembre, los estudiantes en carácter
              profesional tendrán 2 horas más de cursada el segundo sábado por
              la mañana.
            </li>
          </ul>
        </div>
        {/* Prácticas */}
        <div>
          <h2 className="mb-2 font-bebas text-2xl text-purple-light">
            Prácticas
          </h2>
          <ul className="ml-6 list-disc space-y-2">
            <li>Tres opciones horarias ARG diferentes.</li>
            <li>
              Cada horario tiene 2 prácticas semanales y los estudiantes pueden
              sumarse a cualquiera de los horarios disponibles:
              <ul className="ml-6 mt-1 list-disc space-y-1">
                <li>
                  Martes y Jueves: <strong>10:00hs</strong>
                </li>
                <li>
                  Lunes y Miércoles: <strong>14:30hs</strong>
                </li>
                <li>
                  Martes y Jueves: <strong>19:00hs</strong>
                </li>
              </ul>
            </li>
            <li>
              Las clases permanecen grabadas por dos meses. También es posible
              realizar la formación de forma diferida (opción con requisitos).
            </li>
          </ul>
        </div>
        {/* Material de estudio */}
        <div>
          <h2 className="mb-2 font-bebas text-2xl text-purple-light">
            Material de estudio
          </h2>
          <p>
            A lo largo de la cursada, recibirán material de estudio en formato
            PDF y otros materiales de investigación alternativos.
          </p>
        </div>
        {/* Contenido teórico */}
        <div>
          <h2 className="mb-2 font-bebas text-2xl text-purple-light">
            Contenido teórico de la formación
          </h2>
          <ul className="ml-6 list-disc space-y-1">
            <li>
              Sistema musculoesquelético, respiratorio, nervioso, circulatorio,
              linfático, etc.
            </li>
            <li>Planos y ejes.</li>
            <li>Cadenas musculares y miofasciales.</li>
            <li>Evaluación de un cuerpo.</li>
            <li>Práctica de flexibilidad y fuerza (método CFC).</li>
            <li>Pilares del bienestar.</li>
            <li>
              Reeducación postural - conciencia de la musculatura
              estabilizadora.
            </li>
            <li>
              Proyección y percepción de la realidad a través de los sentidos.
            </li>
            <li>
              Estructura de la psique (
              <em>La flexibilidad como estado de la psique</em>).
            </li>
            <li>La postura de la emoción.</li>
            <li>El vínculo con la práctica y el practicante.</li>
            <li>Armado y estructura de una práctica consciente.</li>
          </ul>
          <p className="mt-2">
            Estos son tan solo algunos de los temas que vamos a desarrollar.
          </p>
        </div>
        {/* Opciones de cursada */}
        <div>
          <h2 className="mb-2 font-bebas text-2xl text-purple-light">
            Opciones de cursada
          </h2>
          <div className="ml-6 space-y-4">
            {/* Opción Profesional */}
            <div>
              <h3 className="mb-1 font-bebas text-xl text-purple-primary">
                Opción Profesional:
              </h3>
              <ul className="ml-6 list-disc space-y-1">
                <li>Acceso a todos los espacios formativos.</li>
                <li>Material de estudio en formato PDF y alternativo.</li>
                <li>
                  Clases grabadas por tiempo limitado, disponibles para ver las
                  veces que desees.
                </li>
                <li>
                  Desde agosto hasta noviembre, 2 horas adicionales de cursada
                  el segundo sábado del mes, destinadas a “Fundamentos del
                  Armado de Clases”.
                </li>
                <li>
                  Requisitos para recibir el certificado: Deberán aprobar los
                  exámenes y trabajos prácticos requeridos durante la cursada y
                  tener todas las cuotas abonadas.
                </li>
              </ul>
            </div>
            {/* Opción Personal */}
            <div>
              <h3 className="mb-1 font-bebas text-xl text-purple-primary">
                Opción Personal:
              </h3>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  Acceso a todos los espacios formativos excepto “Fundamentos
                  del Armado de Clases”.
                </li>
                <li>Material de estudio en formato PDF y alternativo.</li>
                <li>
                  Clases grabadas por tiempo limitado, disponibles para ver las
                  veces que desees.
                </li>
                <li>
                  Realización de trabajos prácticos y exámenes en carácter
                  personal (opcional).
                </li>
                <li>
                  Certificado de participación y conclusión del año formativo.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Inscripción */}
        <div>
          <h2 className="mb-2 font-bebas text-2xl text-purple-light">
            Inscripción
          </h2>
          <p>
            Información sobre el proceso de inscripción, costos, y plazos.
            Detallar cómo inscribirse, los costos asociados y cualquier otra
            información relevante.
          </p>
        </div>
      </div>
    </section>
  );
};
