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

  const productIndex = products.findIndex(
    (item) => item.slug === window.location.pathname.split("/")[2]
  );

  return (
    <>
      <section className="bg-primaryGray pt-10">
        <div className="p-5 max-w-[1250px] mx-auto mb-5 h-auto md:flex md:justify-between">
          <div className="md:w-[50%]">
            <div className="h-[500px] relative group">
              <div
                style={{
                  backgroundImage: `url(${products[productIndex].srcImg[currentImage]})`,
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
              {products[productIndex].srcImg.map((img, index) => (
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
          </div>
          <div className="md:w-[45%]">
            <div className="flex flex-col gap-5 mt-5">
              <h2 className="text-4xl font-bold mt-5">{products[0].name}</h2>
            </div>
            {parse(products[productIndex].desc)}
            <Button link="/">Agregar a la Cotización</Button>
          </div>
        </div>
      </section>
      <section className="p-5 max-w-[1250px] mx-auto mb-24 h-auto my-10">
        <ul className="flex flex-col justify-center items-center font-extralight text-lg mb-8 md:flex-row">
          {products[productIndex].specifications.length > 0 && (
            <li
              className={`cursor-pointer h-full w-full text-center py-3 ${
                selectedTab === "especificaciones"
                  ? "bg-primaryGray md:bg-white md:border md:border-l-red md:border-t-red md:border-r-red md:border-b-white md:rounded-t-[8px]"
                  : "md:border md:border-b-red md:border-t-white md:border-r-white md:border-l-white"
              }`}
              onClick={() => setSelectedTab("especificaciones")}
            >
              Especificaciones
            </li>
          )}
          {products[productIndex].information && (
            <li
              className={`cursor-pointer h-full w-full text-center py-3 ${
                selectedTab === "información"
                  ? "bg-primaryGray md:bg-white md:border md:border-l-red md:border-t-red md:border-r-red md:border-b-white md:rounded-t-[8px]"
                  : "md:border md:border-b-red md:border-t-white md:border-r-white md:border-l-white"
              }`}
              onClick={() => setSelectedTab("información")}
            >
              Información
            </li>
          )}
          {products[productIndex].downloads.length > 0 && (
            <li
              className={`cursor-pointer h-full w-full text-center py-3 ${
                selectedTab === "descargas"
                  ? "bg-primaryGray md:bg-white md:border md:border-l-red md:border-t-red md:border-r-red md:border-b-white md:rounded-t-[8px]"
                  : "md:border md:border-b-red md:border-t-white md:border-r-white md:border-l-white"
              }`}
              onClick={() => setSelectedTab("descargas")}
            >
              Descargas
            </li>
          )}
          {products[productIndex].videos.length > 0 && (
            <li
              className={`cursor-pointer h-full w-full text-center py-3 ${
                selectedTab === "videos"
                  ? "bg-primaryGray md:bg-white md:border md:border-l-red md:border-t-red md:border-r-red md:border-b-white md:rounded-t-[8px]"
                  : "md:border md:border-b-red md:border-t-white md:border-r-white md:border-l-white"
              }`}
              onClick={() => setSelectedTab("videos")}
            >
              Videos
            </li>
          )}
        </ul>
        <div>
          {selectedTab === "especificaciones" && (
            <div className="md:w-[60%] pl-20 pt-10">
              {products[productIndex].specifications?.map((spec) => (
                <div
                  key={spec.key}
                  className="flex justify-between mb-5 md:justify-normal"
                >
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
            <div className="md:w-[60%] pl-20 pt-10">
              {parse(products[productIndex].information)}
            </div>
          )}
          {selectedTab === "descargas" && (
            <div>
              {products[productIndex].downloads.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between mb-5 md:justify-normal w-[100vw] md:ml-20"
                >
                  <div className="w-[95%] md:w-[20%]">
                    <p className="font-bold text-textGray">{item.name}</p>
                  </div>
                  <div className="w-[35%] cursor-pointer">
                    <a href={item.link}>
                      <img src="/icons/download.svg" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          {selectedTab === "videos" && (
            <div className="md:grid md:grid-cols-2 md:gap-5">
              {products[productIndex].videos.map((video, index) => (
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
