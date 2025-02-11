import { useState } from "react";
import { Button } from "../components/commons/Button";
import parse from "html-react-parser";
import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../assets/variables";
import { Link, useLocation } from "react-router-dom";
import { ProductType } from "./Products";
import { Loader } from "../components/Loader";
import { useProductStore } from "../store/useStore";

export const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState("información");
  const [quantity, setQuantity] = useState(1);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const productId = queryParams.get("producto");

  const { addProduct, products } = useProductStore();

  const {
    data: productDetails,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["productDetails"],
    queryFn: async (): Promise<ProductType> => {
      const response = await fetch(`${apiUrl}/products/${productId}`, {
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

  const handleAddProduct = () => {
    addProduct({
      id: productDetails?.id || 0,
      image: productDetails?.srcImg[0] || "",
      name: productDetails?.name || "",
      quantity,
    });
  };

  const isProductInInvoice = products.find(
    (product) => product.id === productDetails?.id
  );

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
                      className="w-[400px] h-[400px] m-auto rounded-2xl object-contain"
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
                {isProductInInvoice ? (
                  <div className="flex flex-col gap-5 md:flex-row md:gap-4 justify-between items-center mt-5">
                    <Button link="/productos">Volver a productos</Button>
                    <div className="bg-white p-5 flex justify-center items-center border border-red rounded-xl">
                      <p>Producto agregado!</p>
                    </div>
                    <Button link="/cotizacion">Ir a mi Cotización</Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-5 md:flex-row md:gap-0 justify-between items-center mt-5">
                    <div className="border-2 border-red rounded-xl p-5 flex justify-center items-center bg-white">
                      <img
                        src="/icons/InvoiceMinus.svg"
                        className="cursor-pointer hover:scale-125 trasition duration-300 ease-linear"
                        height={25}
                        width={25}
                        onClick={() =>
                          setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                        }
                      />
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => console.log(e.target.value)}
                        className="text-lg text-center w-10 md:w-8 no-arrows focus:outline-none"
                        min={0}
                        max={455}
                        inputMode="numeric"
                        autoComplete="off"
                        step={1}
                      />
                      <img
                        src="/icons/InvoicePlus.svg"
                        className="cursor-pointer hover:scale-125 trasition duration-300 ease-linear"
                        height={25}
                        width={25}
                        onClick={() => setQuantity((prev) => prev + 1)}
                      />
                    </div>
                    <div>
                      <Button link="" onClick={handleAddProduct}>
                        Agregar a la Cotización
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="p-5 max-w-[1250px] mx-auto mb-10 h-auto my-10">
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
                        <iframe
                          src={video}
                          className="w-[640px] h-[360px]"
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
          <div className="max-w-[1250px] mx-auto mb-24 h-auto">
            <Link to="/productos">
              <button
                type="button"
                className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold border-4 border-white group"
              >
                <div className="bg-red rounded-xl h-12 w-1/4 grid place-items-center absolute left-0 top-0 group-hover:w-full z-10 duration-500">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="white"
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    ></path>
                    <path
                      fill="white"
                      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    ></path>
                  </svg>
                </div>
                <p className="translate-x-14">Volver</p>
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};
