import { useState } from "react";
import { apiUrl } from "../assets/variables";
import { Category, CategoryFilter } from "../components/CategoryFilter";
import { InfoBanner } from "../components/InfoBanner";
import { ProductCard } from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../components/Loader";

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
  const [filteredProducts, setFilteredProducts] = useState<
    ProductType[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    data: products,
    error,
    isLoading: productsLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<ProductType[]> => {
      const response = await fetch(`${apiUrl}/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    },
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
  });

  if (error || categoriesError) {
    console.error("Error fetching data:", error || categoriesError);
    return (
      <div className="flex justify-center items-center">Error loading data</div>
    );
  }

  const onFilterChange = async (categoryId: number | null) => {
    if (!categoryId) {
      setFilteredProducts(products || []);
      return;
    }
    try {
      setIsLoading(true);
      const response = await fetch(
        `${apiUrl}/products/category/${categoryId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setFilteredProducts(data);
      return data;
    } catch (error) {
      console.error("Error fetching products by category:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {productsLoading && categoriesLoading ? (
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
                  onFilterChange={onFilterChange}
                  handleAllProducts={setFilteredProducts}
                  products={products || []}
                />
              </div>
              {isLoading ? (
                <div className="pt-16 p-5 max-w-[1250px] mx-auto mb-20 w-[70%]">
                  <Loader />
                </div>
              ) : (
                <div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  p-5 max-w-[1250px] mx-auto mb-20 w-[70%]">
                  {(!filteredProducts ? products ?? [] : filteredProducts).map(
                    (product) => (
                      <ProductCard
                        key={product.id}
                        srcImg={product.srcImg[0]}
                        alt={product.alt}
                        name={product.name}
                        subtitle={product.subtitle}
                        link={`/productos/${product.slug}`}
                        state={{ productId: product.id }}
                      />
                    )
                  )}
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};
