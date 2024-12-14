import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "./Icons/ArrowDown";

type NavItemProps = PropsWithChildren<{
  link: string;
  text: string;
  hasDropdown: boolean;
  onClick?: () => void;
  open: boolean;
}>;

export const NavItem = ({
  children,
  text,
  link,
  hasDropdown,
  onClick,
  open
}: NavItemProps) => {
  // const [open, setOpen] = useState(false);

  return (
    <li className="flex justify-between flex-col border-b-[1px] border-gray-400">
      <div className="flex justify-between w-full">
        <Link to={link}>
          <div className="py-2 pl-4">{text}</div>
        </Link>
        {hasDropdown && (
          <div
            className="bg-gray-900 text-white cursor-pointer h-12 w-12 flex justify-center align-middle"
            onClick={onClick}
          >
            <ArrowDown
              fill="white"
              className={`transition-transform duration-500 self-center ${
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
