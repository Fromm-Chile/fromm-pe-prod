import { Link } from "react-router-dom";

type ProductCardProps = {
  srcImg: string;
  alt: string;
  name: string;
  subtitle: string;
  link: string;
  state?: object;
};

export const ProductCard = ({
  srcImg,
  alt,
  name,
  subtitle,
  link,
  state,
}: ProductCardProps) => {
  return (
    <Link to={link} state={state}>
      <div className="cursor-pointer transform hover:scale-105 transition-transform">
        <div className="bg-white h-[470px] px-5 py-8 my-5 rounded-md hover:shadow-2xl hover:border-2 hover:border-red transition-all ease duration-500 border border-primaryGray">
          <img
            src={srcImg}
            alt={alt}
            className="h-[250px] w-[250px] m-auto object-contain"
          />
          <div>
            <p className="tracking-widest text-red font-extralight text-lg">
              PRODUCTO
            </p>
            <p className="text-lg font-bold mb-8 text-left">{name}</p>
            <p className="text-lg font-light mb-8 text-left">{subtitle}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
