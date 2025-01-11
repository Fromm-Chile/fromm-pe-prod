import { Link } from "react-router-dom";

type ProductCardProps = {
  srcImg: string;
  alt: string;
  solution: string;
  product: string;
  desc: string;
  link: string;
};

export const ProductCard = ({
  srcImg,
  alt,
  solution,
  product,
  desc,
  link,
}: ProductCardProps) => {
  return (
    <Link to={link}>
      <div className="cursor-pointer">
        <div className="bg-white px-5 py-8 my-5 rounded-md hover:shadow-2xl hover:border-2 hover:border-red transition-all ease duration-500 border border-primaryGray">
          <img src={srcImg} alt={alt} className="h-[250px] w-[250px] m-auto" />
          <div>
            <p className="tracking-widest text-red font-extralight text-lg">
              {solution}
            </p>
            <p className="text-lg font-bold mb-8">{product}</p>
            <p className="text-lg font-bold mb-8">{desc}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
