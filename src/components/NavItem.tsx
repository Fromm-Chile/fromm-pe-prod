import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "./Icons/ArrowDown";

type NavItemProps = PropsWithChildren<{
  link: string;
  text: string;
  hasDropdown: boolean;
  onClick?: () => void;
  open: boolean;
  onLinkClick?: () => void;
  onMouseEnter?: () => void;
}>;

export const NavItem = ({
  children,
  text,
  link,
  hasDropdown,
  onClick,
  open,
  onLinkClick,
  onMouseEnter
}: NavItemProps) => {
  return (
    <li className="flex justify-between flex-col border-b-[1px] md:border-none border-gray-400 md:text-white md:text-lg">
      <div className="flex justify-between w-full md:justify-normal md:items-center">
        <Link to={link} onClick={onLinkClick} onMouseEnter={onMouseEnter}>
          <div className="py-2 pl-4 md:pl-0">{text}</div>
        </Link>
        {hasDropdown && (
          <div
            className="bg-gray-900 md:bg-red text-white cursor-pointer h-12 w-12 md:h-6 md:w-6 flex justify-center align-middle"
            onClick={onClick}
          >
            <ArrowDown
              fill="white"
              className={`transition-transform duration-500 self-center md:w-6 md:h-6 ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>
        )}
      </div>
      <div
        className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </li>
  );
};
