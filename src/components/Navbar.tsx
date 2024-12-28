import { Link } from "react-router-dom";
import { Button } from "./commons/Button";
import { FloatingNav } from "./ui/floating-navbar";
import { navbarData } from "../Data/NavData";

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
      <FloatingNav />
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
            <>
              {navbarData.map((item, index) => (
                <div className="relative group" key={index}>
                <Link to={item.link}>
                  <li className="cursor-pointer hover:font-bold transition- duration-300 ease-linear">
                    {item.name}
                  </li>
                </Link>
                {item.hasDropdown && item.submenu && (
                  <div className="h-auto w-[250px] rounded-lg border border-red bg-white z-[100] shadow-lgs absolute top-10 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                    <ul>
                      {item.submenu.map((submenu) => (
                        <Link to={submenu.link} key={submenu.id}>
                          <li className="p-3 hover:font-extrabold cursor-pointer flex items-center transition-all duration-300 ease-in">
                            <img src="/icons/chevronRightSmall.svg" />
                            {submenu.name}
                          </li>
                        </Link>
                        ))}
                    </ul>
                  </div>
                )}
                </div>
              ))}
            </>
          </ul>
          <Button link="/contacto" className="ml-5">
            CONTACTO
          </Button>
        </div>
      </div>
    </>
  );
};
