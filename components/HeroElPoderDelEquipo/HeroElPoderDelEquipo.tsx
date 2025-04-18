import SectionFrame from "../SectionFrame/SectionFrame";
import TitleWithLine from "../TitleWithLine/TitleWithLine";

export const HeroElPoderDelEquipo = () => {
  return (
    <SectionFrame className="flex h-auto flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2">
      <div className="row-start-1 flex flex-col justify-evenly lg:col-start-1 lg:pb-14">
        <TitleWithLine text="El poder del equipo" className="lg:ml-4" />
      </div>
      <div className="row-span-2 row-start-2 flex flex-col justify-evenly py-2 lg:col-start-1 lg:col-end-3 lg:flex-row lg:justify-center">
        <div className="flex flex-col justify-evenly px-4 text-xs lg:text-base">
          <p className="pb-4">
            La combinación de nuestras disciplinas y enfoques nos permite
            ofrecer un servicio integral y personalizado. Milagros y Albana
            aportan una visión profunda de la conciencia corporal, la
            flexibilidad y la fuerza, ayudando a los practicantes a desarrollar
            un cuerpo fuerte y disponible desde una perspectiva consciente.
            Marga suma su empatía, dinamismo y adaptabilidad, generando espacios
            de aprendizaje donde la autopercepción y el disfrute son clave.
          </p>
          <p>
            Lautaro complementa con su enfoque técnico y eficiente, basado en su
            experiencia en artes marciales y terapias corporales. Juntos,
            logramos un equilibrio entre flexibilidad, fuerza y autoconciencia,
            ayudando a nuestros practicantes a alcanzar un bienestar físico y
            emocional. En cada clase, buscamos no solo potenciar las capacidades
            del cuerpo, sino también acompañar a las personas a descubrir nuevas
            posibilidades y conectar con su potencial desde un lugar consciente
            y respetuoso.
          </p>
        </div>
      </div>
    </SectionFrame>
  );
};
