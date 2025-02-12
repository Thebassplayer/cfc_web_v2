import Pilares from "../../assets/pilares.jpg";
import IconOne from "../../assets/iconos-1.png";
import Icontwo from "../../assets/iconos-2.webp";
import IconThree from "../../assets/iconos-3.webp";
import IconFour from "../../assets/iconos-4.png";
import Image from "next/image";

const HeroFour = () => {
  return (
    <section className="grid grid-rows-3 p-4 lg:flex lg:flex-col lg:px-28 lg:py-7">
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
        className="my-8 h-3/5 object-scale-down"
      />
      <div className="row-span-2 row-start-2 flex flex-col justify-evenly py-2 lg:flex lg:flex-row lg:justify-center">
        <div className="flex flex-col justify-evenly lg:block lg:w-1/4 lg:px-4">
          <Image src={IconOne} alt="Icono 1" className="mx-auto mb-8 size-24" />
          <h1 className="text-center font-bebas text-2xl leading-none text-purple-light lg:pb-4">
            Estudio anatómico y biomecánico
          </h1>
          <p className="mb-4 text-sm">
            Aprender a reconocer qué es lo que estamos moviendo, cuál es su
            función biológica y el propósito de la selección de ejercicios es
            clave para la reeducación corporal. Necesitamos abrir nuestros ojos
            internos y conocer nuestro organismo profundamente. Este
            conocimiento nos permite movernos con mayor conciencia y eficacia,
            promoviendo la salud y el bienestar integral.
          </p>
        </div>
        <div className="flex flex-col justify-evenly lg:block lg:w-1/4 lg:px-4">
          <Image src={Icontwo} alt="Icono 2" className="mx-auto mb-8 size-24" />
          <h1 className="text-center font-bebas text-2xl leading-none text-purple-light lg:pb-4">
            La postura de la emoción
          </h1>
          <p className="mb-4 text-sm">
            Cuando observamos un cuerpo, vemos una estructura que ha transitado
            por diferentes experiencias. No podemos ignorar que reflejamos a
            través de él nuestro estado mental y emocional. El cuerpo es un
            espejo de nuestras emociones y pensamientos, y su postura puede
            revelar mucho sobre nuestro estado interno.
          </p>
          <p className="text-sm">
            En CFC, nuestro enfoque integral combina el estudio anatómico,
            biomecánico y emocional para ofrecer una práctica consciente y
            transformadora. Creemos en el poder del movimiento para sanar y
            crecer, y estamos comprometidos a acompañarte en cada paso de tu
            viaje hacia un mayor control y comprensión de tu cuerpo.
          </p>
        </div>
        <div className="flex flex-col justify-evenly lg:block lg:w-1/4 lg:px-4">
          <Image
            src={IconThree}
            alt="Icono 3"
            className="mx-auto mb-8 size-24"
          />
          <h1 className="text-center font-bebas text-2xl leading-none text-purple-light lg:pb-4">
            ¿Cuándo y por qué se creó?
          </h1>
          <p className="mb-4 text-sm">
            CFC surge en el año 2016, cuando Milagros Somma recibió un
            diagnóstico fatalista respecto a continuar con la práctica de
            movimiento. Apasionada por la flexibilidad, decidió comenzar una
            investigación corporal consciente. No solo obtuvo mejoras en su
            condición física, sino que también alcanzó objetivos que se suponía
            serían imposibles para la condición de su columna.
          </p>
          <p className="text-sm">
            Años más tarde, Milagros conoció a Albana Hernandez, quien también
            había atravesado un proceso similar. Albana, con su experiencia en
            diversas disciplinas de movimiento, había logrado superar sus
            propias limitaciones físicas mediante un enfoque consciente.
            Inspiradas por sus recorridos personales y profesionales, decidieron
            unir sus experiencias para desarrollar y compartir el método de
            enseñanza CFC juntas.
          </p>
        </div>
        <div className="flex flex-col justify-evenly lg:block lg:w-1/4 lg:px-4">
          <Image
            src={IconFour}
            alt="Icono 4"
            className="mx-auto mb-8 size-24"
          />
          <h1 className="text-center font-bebas text-2xl leading-none text-purple-light lg:pb-4">
            Trayectoria
          </h1>
          <p className="mb-4 text-sm">
            Como investigadoras y practicantes, a lo largo de los años hemos
            estudiado varias disciplinas y tomado recursos de cada una de ellas.
            Algunas de estas disciplinas incluyen: Metodología de Feldenkrais,
            Yoga, Flexibilidad y Contorsión, Barra á terre, ADM, entrenamiento
            de fuerza inteligente, Movement Culture, Handstand, Bioneuroemoción,
            entre otras.
          </p>
          <p className="text-sm">
            Esta diversidad de conocimientos nos permite ofrecer un enfoque
            integral y adaptado a las necesidades individuales, garantizando un
            desarrollo equilibrado y consciente de cuerpo y mente. Nuestro
            objetivo es compartir estas valiosas herramientas con cada persona,
            guiándolas en su camino hacia el bienestar y la autoconciencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroFour;
