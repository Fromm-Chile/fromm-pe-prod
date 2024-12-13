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
        <div className="bg-[#0c0c0c] py-4 px-3">
          <img
            src="https://www.frommpackaging.ca/hubfs/Logo/logo-white.png"
            height={32}
            width={200}
          />
          <div className="py-5 text-red font-bold text-xl">
            <p>+56 2 2571 1100 / +56 2 5571 1102</p>
          </div>
        </div>
        <div className="bg-[#f7f7fd] text-black flex justify-center align-middle py-3">
          <p>© Fromm-Pack Chile 2024</p>
        </div>
      </footer>
    </>
  );
};
