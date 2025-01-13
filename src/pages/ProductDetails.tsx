import { useState } from "react";
import { products } from "../Data/productsData";
import { Button } from "../components/commons/Button";
import parse from "html-react-parser";

export const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? products[0].srcImg.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentImage((prev) =>
      prev === products[0].srcImg.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <section className="bg-primaryGray p-5 max-w-[1250px] mx-auto mb-24 h-auto">
        <div className="h-[500px] relative group">
          <div
            style={{
              backgroundImage: `url(${products[0].srcImg[currentImage]})`,
            }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          <div
            onClick={prevSlide}
            className="hidden group-hover:block absolute bottom-[50%] translate-y-[50%] cursor-pointer hover:scale-125"
          >
            <img src="/icons/slideLeft.svg" />
          </div>
          <div
            onClick={nextSlide}
            className="hidden group-hover:block absolute bottom-[50%] right-0 translate-y-[50%] cursor-pointer hover:scale-125 transition-all ease duration-500"
          >
            <img src="/icons/slideRight.svg" />
          </div>
        </div>
        <div className="flex justify-start mt-4 gap-2">
          {products[0].srcImg.map((img, index) => (
            <div
              key={index}
              className={`w-20 h-20 rounded-lg bg-center bg-cover cursor-pointer ${
                currentImage === index
                  ? "border-2 border-red"
                  : "border-2 border-transparent"
              }`}
              style={{ backgroundImage: `url(${img})` }}
              onClick={() => setCurrentImage(index)}
            ></div>
          ))}
        </div>
        <div>
          <div className="flex flex-col gap-5 mt-5">
            <h2 className="text-4xl font-bold mt-5">{products[0].name}</h2>
          </div>
          {parse(products[0].desc)}
          <Button link="/">Agregar a la Cotización</Button>
        </div>
      </section>
    </>
  );
};
