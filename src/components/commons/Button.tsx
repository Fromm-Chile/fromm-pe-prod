import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type ButtonProps = PropsWithChildren<{
  link: string;
  onClick?: () => void;
  className?: string;
}>;

export const Button = ({ children, link, onClick, className }: ButtonProps) => {
  return (
    <Link to={link} onClick={onClick}>
      <div
        className={`bg-red p-4 rounded-xl text-white text-lg w-fit border-2 hover:border-2 hover:border-red hover:bg-white hover:text-red transition-color ease-in-out duration-500 ${className}`}
      >
        {children}
      </div>
    </Link>
  );
};
