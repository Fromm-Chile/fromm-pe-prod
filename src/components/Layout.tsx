import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <>
      <header>
        <div className="hidden bg-[#f7f7fd] md:flex md:justify-end md:items-center md:gap-4 md:py-1 md:px-5">
          <div>
            <div className="overflow-hidden w-[40px] h-[30px] hover:w-[170px] bg-[#323337] hover:bg-gray-500 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300">
              <div className="flex items-center justify-center fill-white ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Isolation_Mode"
                  data-name="Isolation Mode"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                >
                  <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
              />
            </div>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <img src="/icons/Navbar/facebook.svg" height={20} width={20} />
            </li>
            <li>
              <img src="/icons/Navbar/youtube.svg" height={20} width={20} />
            </li>
            <li>
              <img src="/icons/Navbar/linkedin.svg" height={20} width={20} />
            </li>
          </ul>
        </div>
        <Navbar />
      </header>
      <main className="px-4">
        <Outlet />
      </main>
      <footer>
        <div className="bg-[#0c0c0c] py-4 px-5 md:flex md:items-start md:gap-2">
          <img
            src="https://www.frommpackaging.ca/hubfs/Logo/logo-white.png"
            height={82}
            width={260}
          />
          <div className="text-white mt-8 mb-4 md:w-1/3">
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
          <div className="text-white mt-8 mb-4 md:w-1/3">
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
