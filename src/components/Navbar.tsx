import { Link } from "react-router-dom";
import { Button } from "./commons/Button";

export const Navbar = () => {
  return (
    <>
      <div className="hidden lg:flex bg-primaryGray h-[45px] lg:items-center lg:justify-end lg:pr-16 text-textGray gap-16">
        <Link to="/" className="flex gap-1 cursor-pointer hover:underline">
          <img src="/icons/phoneGray.svg" height={23} width={23} />
          <p>+56 2 2571 1100</p>
        </Link>
        <Link to="/" className="cursor-pointer hover:underline">
          <p>Servicio Técnico</p>
        </Link>
        <Link to="/" className="cursor-pointer hover:underline">
          <p>Cotización</p>
        </Link>
      </div>
      <div className="flex h-[90px] justify-center items-center bg-white lg:px-3 xl:px-8 lg:h-[130px] lg:justify-between">
        <Link to="/">
          <img
            className="max-w-[250px] xl:max-w-[350px]"
            src="/img/Navbar/FrommLogo.webp"
            alt="fromm-chile"
          />
        </Link>
        <div className="hidden lg:flex justify-between items-center">
          <ul className="text-base font-medium text-textGray flex items-start lg:gap-3 xl:gap-10">
            <li className="cursor-pointer hover:font-bold text-center p-1 transition- duration-300 ease-linear w-full">
              SOLUCIONES
            </li>
            <li className="cursor-pointer hover:font-bold text-center p-1 transition- duration-300 ease-linear w-full">
              PRODUCTOS
            </li>
            <li className="cursor-pointer hover:font-bold text-center p-1 transition- duration-300 ease-linear w-full">
              MERCADOS
            </li>
            <li className="cursor-pointer hover:font-bold text-center p-1 transition- duration-300 ease-linear w-full">
              NOSOTROS
            </li>
            <li className="cursor-pointer hover:font-bold text-center p-1 transition- duration-300 ease-linear w-full">
              NOTICIAS
            </li>
            <li className="cursor-pointer hover:font-bold text-center p-1 transition- duration-300 ease-linear w-full">
              VACANTES
            </li>
          </ul>
           <Button link="/contacto" className="ml-5">CONTACTO</Button>
        </div>
      </div>
    </>
  );
};
