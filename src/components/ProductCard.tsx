import { Link } from "react-router-dom";

type ProductCardProps = {
  srcImg: string;
  alt: string;
  category: string;
  name: string;
  subtitle: string;
  link: string;
};

export const ProductCard = ({
  srcImg,
  alt,
  category,
  name,
  subtitle,
  link,
}: ProductCardProps) => {
  return (
    <Link to={link}>
      <div className="cursor-pointer transform hover:scale-105 transition-transform">
        <div className="bg-white px-5 py-8 my-5 rounded-md hover:shadow-2xl hover:border-2 hover:border-red transition-all ease duration-500 border border-primaryGray">
          <img src={srcImg} alt={alt} className="h-[250px] w-[250px] m-auto" />
          <div>
            <p className="tracking-widest text-red font-extralight text-lg">
              {category}
            </p>
            <p className="text-lg font-bold mb-8">{name}</p>
            <p className="text-lg font-light mb-8">{subtitle}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
