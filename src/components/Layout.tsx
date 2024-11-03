import { PropsWithChildren } from "react";
import { SlMenu } from "react-icons/sl";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header>
        <div className="flex justify-between items-center p-5 border-b-2 shadow-lg">
          <img
            className="max-w-[163px]"
            src="https://www.frommpackaging.ca/hubfs/Logo/full-logo-header.png"
            alt="fromm-chile"
          />
          <div className="cursor-pointer">
            <SlMenu />
          </div>
        </div>
      </header>
      {children}
    </>
  );
};
