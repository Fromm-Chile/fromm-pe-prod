import { HoverEffect } from "../components/ui/card-hover-effect";
import { categories } from "../Data/productData";

export const Home = () => {
  return (
    <>
      <section>
        <div className="flex flex-col gap-3 justify-center items-center my-5 md:mt-24">
          <h2 className="text-center font-medium md:text-xl">
            FROMM desarrolla y fabrica diferentes sistemas de embalaje, para
            asegurar las mercancías. Fundada en 1947 y con más de 50 sucursales
            en todo el mundo
          </h2>
          <h1 className="text-2xl text-red font-bold text-center md:text-4xl">
            Embalaje con innovación y precisión
          </h1>
        </div>
        <div className="max-w-5xl mx-auto">
          <HoverEffect items={categories} />
        </div>
      </section>
    </>
  );
};
