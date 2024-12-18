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
        <div className="shadow-2xl fixed bottom-0 right-0 w-full bg-white flex justify-between items-center p-6">
          <details className="details-upwards">
            <summary className="list-none">
              <div className="summary-content h-14 w-14 border-[1px] border-red p-2 cursor-pointer">
                <img src="/icons/menuMob.svg" />
              </div>
            </summary>
            <div className="details-content flex-col justify-between">
              <div>
                <img
                  className="max-w-[250px] m-auto"
                  src="/img/Navbar/FrommLogo.webp"
                  alt="fromm-chile"
                />
                <div className="m-auto w-full flex justify-center items-center">
                  <ul className="mt-12 text-2xl font-light text-textGray flex flex-col gap-6 items-start">
                    <li className="cursor-pointer hover:underline hover:text-red">
                      SOLUCIONES
                    </li>
                    <li className="cursor-pointer hover:underline hover:text-red">
                      PRODUCTOS
                    </li>
                    <li className="cursor-pointer hover:underline hover:text-red">
                      MERCADOS
                    </li>
                    <li className="cursor-pointer hover:underline hover:text-red">
                      NOSOTROS
                    </li>
                    <li className="cursor-pointer hover:underline hover:text-red">
                      NOTICIAS
                    </li>
                    <li className="cursor-pointer hover:underline hover:text-red">
                      VACANTES
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-[1px] border-red p-4 mt-8 rounded-lg pl-10 m-auto">
                <div className="flex items-center justify-start gap-4 mb-2">
                  <img src="/icons/Layout/phone.svg" height={30} width={30} />
                  <p className="text-textGray font-light">+56 2 2571 1100</p>
                </div>
                <div className="flex items-center justify-start gap-4">
                  <img src="/icons/Layout/mail.svg" height={30} width={30} />
                  <p className="text-textGray font-light">contacto@fromm-pack.cl</p>
                </div>
              </div>
            </div>
          </details>
          <Button link="/contacto">CONTACTO</Button>
        </div>
      </footer>
    </>
  );
};
