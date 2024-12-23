import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Button } from "./commons/Button";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer className="bg-primaryGray h-auto flex flex-col items-center pt-16 pb-9">
        <Link className="mb-14" to="/">
          <img
            className="max-w-[310px]"
            src="/img/Navbar/FrommLogo.webp"
            alt="fromm-chile"
          />
        </Link>
        <div className="self-start ml-8 mb-6">
          <h2 className="font-bold text-2xl mb-8">FROMM CHILE</h2>
          <p className="text-textGray font-light mb-4">
            Dirección: Avenida Aeropuerto #560 <br />
            Quilicura. Santiago de Chile.
          </p>
          <p className="text-textGray font-light mb-4">
            E-mail: contacto@fromm-pack.cl <br />
            Teléfono: +56 2 2571 1100
          </p>
        </div>
        <ul className="self-start ml-8 mb-8 text-red font-medium">
          <li className="mb-2 hover:font-bold cursor-pointer">
            <Link className="flex items-center" to="/">
              <p>Soluciones</p>
              <img src="/icons/chevronRightSmall.svg" />
            </Link>
          </li>
          <li className="mb-2 hover:font-bold cursor-pointer">
            <Link className="flex items-center" to="/">
              <p>Industrias</p>
              <img src="/icons/chevronRightSmall.svg" />
            </Link>
          </li>
          <li className="mb-2 hover:font-bold cursor-pointer">
            <Link className="flex items-center" to="/">
              <p>Acerca de Fromm</p>
              <img src="/icons/chevronRightSmall.svg" />
            </Link>
          </li>
          <li className="mb-2 hover:font-bold cursor-pointer">
            <Link className="flex items-center" to="/">
              <p>Productos</p>
              <img src="/icons/chevronRightSmall.svg" />
            </Link>
          </li>
        </ul>
        <div className="border-t-[1px] border-black mb-24 mx-8">
          <p className="text-textGray font-light mt-4">
            © 2024 Fromm Chile. Todos los derechos reservados.
          </p>
        </div>
        <div className="details-container shadow-2xl fixed bottom-0 right-0 w-full z-50 bg-white p-6">
          <details className="details-upwards">
            <summary className="list-none flex justify-between items-center">
              <div className="summary-content h-14 w-14 border-[1px] border-red p-2 cursor-pointer">
                <img src="/icons/menuMob.svg" />
              </div>
              <Button link="/contacto">CONTACTO</Button>
            </summary>
            <div>
              <div>
                <img
                  className="max-w-[250px] m-auto mt-6"
                  src="/img/Navbar/FrommLogo.webp"
                  alt="fromm-chile"
                />
                <div className="m-auto w-full flex justify-center items-center mb-28">
                  <ul className="mt-12 text-2xl font-light text-textGray flex flex-col gap-6 items-start w-full">
                    <li className="cursor-pointer hover:text-white hover:bg-red text-center p-1 transition-colors duration-500 ease-linear w-full">
                      SOLUCIONES
                    </li>
                    <li className="cursor-pointer hover:text-white hover:bg-red text-center p-1 transition-colors duration-500 ease-linear w-full">
                      PRODUCTOS
                    </li>
                    <li className="cursor-pointer hover:text-white hover:bg-red text-center p-1 transition-colors duration-500 ease-linear w-full">
                      MERCADOS
                    </li>
                    <li className="cursor-pointer hover:text-white hover:bg-red text-center p-1 transition-colors duration-500 ease-linear w-full">
                      NOSOTROS
                    </li>
                    <li className="cursor-pointer hover:text-white hover:bg-red text-center p-1 transition-colors duration-500 ease-linear w-full">
                      NOTICIAS
                    </li>
                    <li className="cursor-pointer hover:text-white hover:bg-red text-center p-1 transition-colors duration-500 ease-linear w-full">
                      VACANTES
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-[1px] border-red p-6 mt-8 rounded-lg m-auto max-w-[70%]">
                <div className="flex items-center justify-start gap-4 mb-2">
                  <img src="/icons/Layout/phone.svg" height={30} width={30} />
                  <p className="text-textGray font-light">+56 2 2571 1100</p>
                </div>
                <div className="flex items-center justify-start gap-4">
                  <img src="/icons/Layout/mail.svg" height={30} width={30} />
                  <p className="text-textGray font-light">
                    contacto@fromm-pack.cl
                  </p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </footer>
    </>
  );
};
