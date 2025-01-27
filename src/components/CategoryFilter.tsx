import { useState } from "react";
import { ProductType } from "../pages/Products";

export type Category = {
  id: number;
  name: string;
  parentCategory: number | null;
  other_Categories: Category[];
  createdAt: string;
  updatedAt: string | null;
};

type CategoryFilterProps = {
  products: ProductType[];
  categories: Category[];
  onFilterChange: (categoryId: number | null) => void;
  handleAllProducts: (product: ProductType[] | null) => void;
};

export const CategoryFilter = ({
  products,
  categories,
  onFilterChange,
  handleAllProducts,
}: CategoryFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<number | null>(
    null
  );
  const [isCategorySelected, setIsCategorySelected] = useState<boolean>(false);
  const [isSubCategorySelected, setIsSubCategorySelected] =
    useState<boolean>(false);

  const handleSelectedCategory = (id: number) => {
    setSelectedCategory((prev) => (prev === id ? null : id));
  };

  const handleSelectedSubCategory = (id: number) => {
    setSelectedSubCategory((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {categories?.map((category) => (
        <div
          key={category.id}
          className={`${
            isCategorySelected &&
            selectedCategory === category.id &&
            category.other_Categories.length === 0
              ? "bg-red font-extrabold text-white p-5 rounded-md shadow-md cursor-pointer"
              : "bg-white p-5 rounded-md shadow-md cursor-pointer text-textGray font-bold hover:border hover:border-red transition-all duration-300 ease-linear "
          }`}
        >
          <div
            className="flex items-center justify-between"
            onClick={() => {
              if (
                selectedCategory === category.id &&
                category.other_Categories.length === 0
              ) {
                handleAllProducts(products);
                handleSelectedCategory(category.id);
                setIsCategorySelected(false);
              } else {
                setIsCategorySelected(true);
                handleSelectedCategory(category.id);
                onFilterChange(
                  category.other_Categories.length > 0 ? null : category.id
                );
              }
            }}
          >
            <p>{category.name}</p>
            {category.other_Categories.length > 0 && (
              <img src="/icons/chevronDown.svg" className="h-8 w-8" />
            )}
          </div>
          {category.other_Categories.length > 0 ? (
            <ul
              className={`mt-5 font-light ${
                selectedCategory === category.id ? "h-auto block" : "h-0 hidden"
              }`}
            >
              {category.other_Categories?.map((subcategory) => {
                return (
                  <li
                    key={subcategory.id}
                    className={`${
                      isSubCategorySelected &&
                      selectedSubCategory === subcategory.id
                        ? "bg-red text-white cursor-pointer p-3"
                        : "hover:bg-primaryGray hover:text-red cursor-pointer  transition-all duration-300 ease-linear p-3"
                    }`}
                    onClick={
                      isSubCategorySelected &&
                      selectedSubCategory === subcategory.id
                        ? () => {
                            handleAllProducts(products);
                            handleSelectedSubCategory(subcategory.id);
                            setIsSubCategorySelected(false);
                          }
                        : () => {
                            setIsSubCategorySelected(true);
                            handleSelectedSubCategory(subcategory.id);
                            onFilterChange(subcategory.id);
                          }
                    }
                  >
                    {subcategory.name}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
};
