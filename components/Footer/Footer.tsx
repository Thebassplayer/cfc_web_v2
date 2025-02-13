import Image from "next/image";

import Email from "../../assets/email.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Whatsapp from "../../assets/whatsapp.png";
import Youtube from "../../assets/youtube.png";
import BsAs from "../../assets/Group18.png";
export const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <section className="mx-auto max-w-screen-xl px-4 py-5">
        <div className="mb-5 flex flex-col items-center justify-around pt-1 md:flex-row md:pt-5">
          {/* Contact Section (Right on Desktop, First on Mobile) */}
          <div className="order-1 w-full px-4 pt-4 md:order-2 md:w-1/2">
            <h1 className="mb-4 text-center font-bebas text-lg font-semibold">
              CONTACTANOS
            </h1>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h6 className="text-sm">
                  whatsapp <br />
                  <small className="text-gray-500">+54 9 11 3163 1727</small>
                </h6>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={Whatsapp}
                  alt="+54 9 11 3163 1727"
                  width="35"
                  height="35"
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h6 className="text-sm">
                  e-mail <br />
                  <small className="text-gray-500">cfc.method@gmail.com</small>
                </h6>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={Email}
                  alt="cfc.method@gmail.com"
                  width="35"
                  height="30"
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h6 className="mt-3 text-center text-gray-500">
                Déjanos tus datos para que recibir más información.
              </h6>
              <button className="mt-1 rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-600">
                Quiero saber más
              </button>
            </div>
          </div>
          {/* Social & Branding Section (Left on Desktop, Second on Mobile) */}
          <div className="order-2 w-full px-4 pt-5 md:order-1 md:w-1/2 md:pt-4">
            <div className="mb-4 grid grid-cols-3">
              <Image
                src={Youtube}
                alt="YouTube"
                width="50"
                height="40"
                className="mx-auto"
              />
              <Image
                src={Facebook}
                alt="Facebook"
                width="40"
                height="40"
                className="mx-auto"
              />
              <Image
                src={Instagram}
                alt="Instagram"
                width="40"
                height="40"
                className="mx-auto"
              />
            </div>
            <div className="text-center">
              <h4 className="my-4 text-gray-500">
                conciencia y flexibilidad corporal ®
              </h4>
              <Image
                src={BsAs}
                alt="Group Logo"
                width="252"
                height="30"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
