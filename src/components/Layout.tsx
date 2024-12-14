import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <>
      <header className="relative">
        <Navbar />
      </header>
      <Outlet />
      <footer>
        <div className="bg-[#0c0c0c] py-4 px-5">
          <img
            src="https://www.frommpackaging.ca/hubfs/Logo/logo-white.png"
            height={82}
            width={260}
          />
          <div className="text-white mt-8 mb-4">
            <h3 className="mb-2 font-bold text-lg">Grupo FROMM</h3>
            <p>
              Especializados en sistemas de embalaje, ofrece una gama diversa:
              enzunchadoras, envolvedoras, robots; con zunchos de acero,
              poliéster, polipropileno, y el innovador sistema de protección
              Airpad.
            </p>
          </div>
          <div className="text-white text-sm">
            <p className="font-bold text-lg mb-3">Mapa del sitio</p>
            <ul className="flex flex-col gap-2">
              <li>Sistemas Automáticos</li>
              <li>Herremientas</li>
              <li>Industrias</li>
              <li>Zunchos</li>
              <li>Servicio Técnico</li>
              <li>Nosotros</li>
              <li>Brochures</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div className="text-white mt-8 mb-4">
            <h3 className="mb-4 font-bold text-lg">Contáctenos</h3>
            <ul className="flex flex-col gap-2 mb-5">
              <li className="flex gap-4 items-center">
                <img src="/icons/Layout/phone.svg" height={20} width={20} />
                <p className="font-medium">+56 2 2571 1100 / +56 2 5571 1102</p>
              </li>
              <li className="flex gap-4 items-center">
                <img src="/icons/Layout/mail.svg" height={20} width={20} />
                <a href="mailto:contacto@fromm-pack.cl">
                  contacto@fromm-pack.cl
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <img src="/icons/Layout/location.svg" height={20} width={20} />
                <p>Avenida Aeropuerto #560, Quilicura. Santiago de Chile.</p>
              </li>
            </ul>
            <ul className="flex items-center gap-4 mb-5">
              <li>
                <img
                  src="/icons/Navbar/facebookWhite.svg"
                  height={15}
                  width={15}
                />
              </li>
              <li>
                <img
                  src="/icons/Navbar/youtubeWhite.svg"
                  height={15}
                  width={15}
                />
              </li>
              <li>
                <img
                  src="/icons/Navbar/linkedinWhite.svg"
                  height={15}
                  width={15}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#f7f7fd] text-black p-3 text-center">
          <p>Fromm-Pack Chile - Diseñado por Guzmán Tech - Copyright ©2024</p>
        </div>
      </footer>
    </>
  );
};
