import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <>
      <div className="flex h-[90px] justify-center items-center bg-white"> 
        <Link to="/">
          <img
            className="max-w-[250px]"
            src="/img/Navbar/FrommLogo.webp"
            alt="fromm-chile"
          />
        </Link>
      </div>
    </>
  );
};
