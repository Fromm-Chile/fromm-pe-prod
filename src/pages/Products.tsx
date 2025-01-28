import { apiUrl } from "../assets/variables";
import { Category, CategoryFilter } from "../components/CategoryFilter";
import { InfoBanner } from "../components/InfoBanner";
import { ProductCard } from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../components/Loader";
import axios from "axios";
import { useLocation } from "react-router-dom";

export type ProductType = {
  id: number;
  slug: string;
  srcImg: string[];
  categoryId: number;
  alt: string;
  name: string;
  subtitle: string;
  desc?: string;
  jsonDetails?: {
    specifications: {
      key: string;
      value: string;
    }[];
    information: string;
    downloads: {
      name: string;
      link: string;
    }[];
    videos: string[];
  };
};

export const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category =
    Number(queryParams.get("categoryId")) === 0
      ? null
      : Number(queryParams.get("categoryId"));
  // const [category, setCategory] = useState<number | null>(null);
  const {
    data: products,
    error,
    isLoading: isProductsLoading,
  } = useQuery({
    queryKey: ["products", { categoryId: category }],
    queryFn: async (a): Promise<ProductType[]> => {
      console.log(a);
      const response = await axios(`${apiUrl}/products`, {
        method: "GET",
        params: a.queryKey[1],
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.data;
      return data;
    },
    staleTime: 5 * 60 * 1000,
  });

  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<Category[]> => {
      const response = await fetch(`${apiUrl}/categories/subcategories`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    },
    staleTime: 5 * 60 * 1000,
  });

  if (error || categoriesError) {
    console.error("Error fetching data:", error || categoriesError);
    return (
      <div className="flex justify-center items-center">Error loading data</div>
    );
  }

  return (
    <>
      {isProductsLoading && categoriesLoading ? (
        <Loader />
      ) : (
        <>
          <InfoBanner
            category="SIEMPRE UNA SOLUCIÓN"
            srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/products.webp"
            alt="products"
            title="PRODUCTOS"
            desc="NUESTROS PRODUCTOS"
            link=""
            buttonTitle="Contacto"
          />
          <section className="bg-primaryGray">
            <div className="max-w-[1350px] m-auto flex flex-col md:flex-row items-start justify-center mb-20">
              <div className="mt-10 w-full px-10 md:px-0 md:mt-24 md:w-[350px] md:mb-20">
                <CategoryFilter
                  categories={categories || []}
                  selectedCategory={category}
                  // setSelectedCategory={setCategory}
                />
              </div>
              {isProductsLoading ? (
                <div className="pt-16 p-5 max-w-[1250px] mx-auto mb-20 w-[70%]">
                  <Loader />
                </div>
              ) : (
                <div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  p-5 max-w-[1250px] mx-auto mb-20 w-[70%]">
                  {(!products ? products ?? [] : products).map((product) => (
                    <ProductCard
                      key={product.id}
                      srcImg={product.srcImg[0]}
                      alt={product.alt}
                      name={product.name}
                      subtitle={product.subtitle}
                      link={`/productos/${product.slug}`}
                      state={{ productId: product.id }}
                    />
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
