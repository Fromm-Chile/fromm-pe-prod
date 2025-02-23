import { Link } from "react-router-dom";

type InfoProductCardProps = {
  srcImg: string;
  alt: string;
  solution: string;
  product?: string;
  link: string;
};

export const InfoProductCard = ({
  srcImg,
  alt,
  solution,
  product,
  link,
}: InfoProductCardProps) => {
  return (
    <Link to={link}>
      <div className="bg-white px-5 py-8 my-5 h-[450px] flex flex-col justify-between rounded-md hover:shadow-2xl hover:border-2 hover:border-red transition-all ease duration-500 border border-primaryGray">
        <div className="md:h-[340px] flex items-center">
          <img src={srcImg} alt={alt} />
        </div>
        <div>
          <p className="tracking-widest text-red font-extralight text-lg">
            {solution}
          </p>
          <p className="text-lg font-bold mb-8">{product}</p>
        </div>
      </div>
    </Link>
  );
};
