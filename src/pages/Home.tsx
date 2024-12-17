import { HoverEffect } from "../components/ui/card-hover-effect";
import { categories } from "../Data/productData";

export const Home = () => {
  return (
    <>
    <section className="relative">
      <video autoPlay loop muted className="object-cover max-h-[600px] min-w-full opacity-30">
        <source src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/fromm-chile.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center font-bold text-xl md:text-4xl max-h-[600px] min-w-[80%] z-10">
        <h1>Soluciones para el embalaje industrial con tecnología suiza de punta</h1>
      </div>
    </section>
      <section className="px-4">
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
