import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="">
      {/* <div className="bg-[#ff0000] h-8 flex items-center justify-around">
        <div className="">
          <p className="text-sm text-white text-center">(+56) 2 2571 1100</p>
        </div>
        <div className="cursor-pointer">
          <a
            className="text-white text-sm"
            href="mailto:contacto@fromm-pack.cl"
          >
            contacto@fromm-pack.cl
          </a>
        </div>
      </div> */}
      <div className="flex justify-between items-center py-2 px-4 border-b-2 shadow-lg h-14">
        <img
          className="max-w-[165px]"
          src="https://www.frommpackaging.ca/hubfs/Logo/full-logo-header.png"
          alt="fromm-chile"
        />
        <div className="cursor-pointer flex gap-2 items-center" onClick={() => setIsOpen(prev => !prev)}>
          {!isOpen ? (
            <img src="/icons/Layout/menu.svg" />
          ) : (
            <img src="/icons/Layout/close.svg" />
          )}
        </div>
      </div>
    </header>
  );
};
