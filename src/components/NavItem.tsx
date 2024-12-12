import { PropsWithChildren, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "./Icons/ArrowDown";

type NavItemProps = PropsWithChildren<{
  link: string;
  text: string;
  hasDropdown: boolean;
}>;

export const NavItem = ({
  children,
  text,
  link,
  hasDropdown,
}: NavItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <div className="flex justify-between hover:bg-gray-100 border-b-[1px] border-gray-100">
        <Link to={link}>
          <div className="py-2 pl-4">{text}</div>
        </Link>
        {hasDropdown && (
          <div
            className="bg-gray-900 text-white cursor-pointer h-12 w-12 flex justify-center align-middle"
            onClick={() => setOpen(!open)}
          >
            <ArrowDown fill="white" className={`transition-transform duration-500 ${open ? 'rotate-180' : ''}`}/>
          </div>
        )}
      </div>
      {open && children}
    </li>
  );
};
