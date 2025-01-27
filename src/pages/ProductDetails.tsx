import { useState } from "react";
import { Button } from "../components/commons/Button";
import parse from "html-react-parser";
import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../assets/variables";
import { useLocation } from "react-router-dom";
import { ProductType } from "./Products";
import { Loader } from "../components/Loader";

export const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState("información");

  const { state } = useLocation();

  const {
    data: productDetails,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["productDetails"],
    queryFn: async (): Promise<ProductType> => {
      const response = await fetch(`${apiUrl}/products/${state.productId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    },
  });

  if (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="flex justify-center items-center">
        Error loading products
      </div>
    );
  }

  const prevSlide = () => {
    setCurrentImage((prev) =>
      productDetails
        ? prev === 0
          ? productDetails.srcImg.length - 1
          : prev - 1
        : prev
    );
  };

  const nextSlide = () => {
    setCurrentImage((prev) =>
      productDetails && prev === productDetails.srcImg.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <section className="bg-primaryGray pt-10">
            <div className="p-5 max-w-[1250px] mx-auto mb-5 h-auto md:flex md:justify-between">
              <div className="md:w-[50%]">
                <div className="h-[400px] relative group">
                  <div className="rounded-2xl bg-center bg-cover duration-500">
                    <img
                      src={`${productDetails?.srcImg[currentImage]}`}
                      alt={productDetails?.alt}
                      className="w-full max-h-[400px] rounded-2xl object-contain"
                    />
                  </div>
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
                  {productDetails?.srcImg.map((img, index) => (
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
                  <h2 className="text-4xl font-bold mt-5">
                    {productDetails?.name}
                  </h2>
                </div>
                {parse(productDetails?.desc as string)}
                <Button link="/">Agregar a la Cotización</Button>
              </div>
            </div>
          </section>
          <section className="p-5 max-w-[1250px] mx-auto mb-24 h-auto my-10">
            <ul className="flex flex-col justify-center items-center font-extralight text-lg mb-8 md:flex-row">
              {productDetails?.jsonDetails?.specifications.length &&
              productDetails?.jsonDetails?.specifications.length > 0 ? (
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
              ) : null}
              {productDetails?.jsonDetails?.information && (
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
              {productDetails?.jsonDetails?.downloads &&
              productDetails?.jsonDetails?.downloads.length > 0 ? (
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
              ) : null}
              {productDetails?.jsonDetails?.videos &&
              productDetails?.jsonDetails?.videos.length > 0 ? (
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
              ) : null}
            </ul>
            <div>
              {selectedTab === "especificaciones" && (
                <div className="md:w-[60%] pl-20 pt-10">
                  {productDetails?.jsonDetails?.specifications.map((spec) => (
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
              {selectedTab === "información" &&
              productDetails?.jsonDetails?.information &&
              productDetails.jsonDetails.information !== "" ? (
                <div className="md:w-[60%] pl-20 pt-10">
                  {parse(productDetails?.jsonDetails?.information as string)}
                </div>
              ) : null}
              {selectedTab === "descargas" && (
                <div>
                  {productDetails?.jsonDetails?.downloads.map((item, index) => (
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
                  {productDetails?.jsonDetails?.videos.map((video, index) => (
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
      )}
    </>
  );
};
