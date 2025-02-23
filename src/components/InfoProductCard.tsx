import React from "react";
import { Link } from "react-router-dom";

type InfoProductCardProps = {
  srcImg: string;
  alt: string;
  solution: string;
  product?: string;
  desc?: React.JSX.Element;
  link: string;
};

export const InfoProductCard = ({
  srcImg,
  alt,
  solution,
  product,
  desc,
  link,
}: InfoProductCardProps) => {
  return (
    <Link to={link}>
      <div className="bg-white px-5 py-8 my-5 h-[450px] flex flex-col justify-between rounded-md hover:shadow-2xl hover:border-2 hover:border-red transition-all ease duration-500 border border-primaryGray">
        <div className="md:h-[250px] flex items-center">
          <img src={srcImg} alt={alt} />
        </div>
        <div>
          <p className="tracking-widest text-red font-extralight text-lg">
            {solution}
          </p>
          <p className="text-lg font-bold mb-8">{product}</p>
          {desc}
        </div>
      </div>
    </Link>
  );
};
