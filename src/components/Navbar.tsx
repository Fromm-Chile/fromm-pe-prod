import { useState } from "react";
import { navBarData } from "../Data/NavData";
import { NavItem } from "./NavItem";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const handleDropdownClick = (dropdownId: number) => {
    setOpenDropdownId((prevId) => (prevId === dropdownId ? null : dropdownId));
  };

  return (
    <>
      <div
        className={`flex justify-between items-center py-2 px-4 border-b-2 shadow-lg h-14 ${
          isOpen ? "fixed" : "absolute"
        } w-full bg-white z-20`}
      >
        <Link to="/">
        <img
          className="max-w-[165px]"
          src="https://www.frommpackaging.ca/hubfs/Logo/full-logo-header.png"
          alt="fromm-chile"
        />
        </Link>
        <div
          className="cursor-pointer flex gap-2 items-center"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {!isOpen ? (
            <img src="/icons/Layout/menu.svg" />
          ) : (
            <img src="/icons/Layout/close.svg" />
          )}
        </div>
      </div>
      {isOpen && (
        <nav className="border rounded-md min-h-[85vh] h-auto w-[98%] m-auto flex flex-col justify-between shadow-2xl fixed z-10 top-[55px] left-[3px] bg-white overflow-y-scroll">
          <div className="max-h-[80vh] overflow-y-scroll">
            <ul className="">
              {navBarData.map((item) => (
                <NavItem
                  key={item.id}
                  link={item.url}
                  text={item.title}
                  hasDropdown={item.isDropdown}
                  onClick={() => handleDropdownClick(item.id)}
                  onLinkClick={() => setIsOpen(false)}
                  open={openDropdownId === item.id}
                >
                  {item.isDropdown &&
                    item.dropDownItems?.map((subItem) => (
                      <div
                        key={subItem.id}
                        className="flex justify-between border-b-[1px] border-gray-300 py-3 mx-6 text-sm font-medium"
                      >
                        <Link to={subItem.url} onClick={() => setIsOpen(false)}>{subItem.title}</Link>
                      </div>
                    ))}
                </NavItem>
              ))}
            </ul>
            <div className="bg-red text-black font-semibold flex justify-center align-middle py-3">
              <Link to="/cotiza-en-linea">SOLICITA TU COTIZACÓN</Link>
            </div>
          </div>
          <div>
            <div className="bg-red text-white flex justify-center align-middle py-3">
              <Link to="/cotiza-en-linea">COTIZA EN LÍNEA</Link>
            </div>
            <div>
              <div className="flex justify-center gap-12 py-5 text-sm">
                <div className="flex gap-1 align-middle">
                  <img src="/icons/Navbar/search.svg" height={20} width={20} />
                  <p>BUSCAR</p>
                </div>
                <ul className="flex align-middle gap-4">
                  <li>
                    <img
                      src="/icons/Navbar/facebook.svg"
                      height={15}
                      width={15}
                    />
                  </li>
                  <li>
                    <img
                      src="/icons/Navbar/youtube.svg"
                      height={15}
                      width={15}
                    />
                  </li>
                  <li>
                    <img
                      src="/icons/Navbar/linkedin.svg"
                      height={15}
                      width={15}
                    />
                  </li>
                </ul>
              </div>
              <div className="py-5 text-center text-red font-bold">
                <p>+56 2 2571 1100 / +56 2 5571 1102</p>
                <a href="mailto:contacto@fromm-pack.cl">
                  contacto@fromm-pack.cl
                </a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
