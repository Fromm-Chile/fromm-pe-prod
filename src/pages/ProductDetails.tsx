import { useState } from "react";
import { products } from "../Data/productsData";
import { Button } from "../components/commons/Button";
import parse from "html-react-parser";

export const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState("especificaciones");

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
      <section className="bg-primaryGray p-5 max-w-[1250px] mx-auto mb-5 h-auto">
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
      <section className="p-5 max-w-[1250px] mx-auto mb-24 h-auto my-10">
        <ul className="flex flex-col justify-center items-center font-extralight text-lg mb-8">
          {products[0].specifications.length > 0 && (
            <li
              className={`cursor-pointer hover:bg-primaryGray h-full w-full text-center py-3 ${
                selectedTab === "especificaciones" && "bg-primaryGray"
              }`}
              onClick={() => setSelectedTab("especificaciones")}
            >
              Especificaciones
            </li>
          )}
          {products[0].information && (
            <li
              className={`cursor-pointer hover:bg-primaryGray h-full w-full text-center py-3 ${
                selectedTab === "información" && "bg-primaryGray"
              }`}
              onClick={() => setSelectedTab("información")}
            >
              Información
            </li>
          )}
          {products[0].downloads.length > 0 && (
            <li
              className={`cursor-pointer hover:bg-primaryGray h-full w-full text-center py-3 ${
                selectedTab === "descargas" && "bg-primaryGray"
              }`}
              onClick={() => setSelectedTab("descargas")}
            >
              Descargas
            </li>
          )}
          {products[0].videos.length > 0 && (
            <li
              className={`cursor-pointer hover:bg-primaryGray h-full w-full text-center py-3 ${
                selectedTab === "videos" && "bg-primaryGray"
              }`}
              onClick={() => setSelectedTab("videos")}
            >
              Videos
            </li>
          )}
        </ul>
        <div>
          {selectedTab === "especificaciones" && (
            <div>
              {products[0].specifications?.map((spec) => (
                <div key={spec.key} className="flex justify-between mb-5">
                  <div className="w-[45%]">
                    <p className="font-bold text-textGray">{spec.key}</p>
                  </div>
                  <div className="w-[45%]">
                    <p className="font-extralight">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {selectedTab === "información" && (
            <div>{parse(products[0].information)}</div>
          )}
          {selectedTab === "videos" && (
            <div>
              {products[0].videos.map((video, index) => (
                <div key={index} className="flex justify-between mb-5">
                  <div className="w-full">
                    <video src={video} controls></video>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
