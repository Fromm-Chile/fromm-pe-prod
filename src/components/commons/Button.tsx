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
      <div className={`bg-red p-4 rounded-xl text-white text-lg ${className}`}>{children}</div>
    </Link>
  );
};
