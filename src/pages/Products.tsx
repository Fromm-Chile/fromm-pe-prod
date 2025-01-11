import { InfoBanner } from "../components/InfoBanner";
import { ProductCard } from "../components/ProductCard";

type ProductsType = {
  id: number;
  srcImg: string[];
  alt: string;
  solution: string;
  product: string;
  desc: string;
  link: string;
};

const products: ProductsType[] = [
  {
    id: 1,
    srcImg: [
      "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadoraelectrica.jpg",
    ],
    alt: "enzunchadora-electrica",
    solution: "ZUNCHOS",
    product: "Enzunchadora a Bateria P328/P329",
    desc: "Equipamiento de última tecnología FROMM", // This should be a JSX.Element
    link: "/",
  },
  {
    id: 2,
    srcImg: [
      "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadoramanual.jpeg",
    ],
    alt: "enzunchadora-manual",
    solution: "ZUNCHOS",
    product: "Enzunchadora para acero A333",
    desc: "Equipamiento de última tecnología FROMM",
    link: "/",
  },
  {
    id: 3,
    srcImg: [
      "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadoraneumatica.jpeg",
    ],
    alt: "enzunchadora-neumatica",
    solution: "ZUNCHOS",
    product: "Enzunchadora Neumática A380",
    desc: "Equipamiento de última tecnología FROMM",
    link: "/",
  },
];

export const Products = () => {
  return (
    <>
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/products.webp"
        alt="products"
        title="PRODUCTOS"
        desc="NUESTROS PRODUCTOS"
        link=""
        buttonTitle="Contacto"
      />
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-primaryGray p-5 max-w-[1250px] mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            srcImg={product.srcImg[0]}
            alt={product.alt}
            solution={product.solution}
            product={product.product}
            desc={product.desc}
            link={product.link}
          />
        ))}
      </section>
    </>
  );
};
