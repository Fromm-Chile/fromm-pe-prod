import { create } from "zustand";
import { persist } from "zustand/middleware";

type Product = {
  id: number;
  userId: number;
  image: string;
  name: string;
  quantity: number;
};

type ProductStore = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (userId: number) => void;
  updateProduct: (userId: number, quantity: number) => void;
  reset: () => void;
};

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [],
      addProduct: async (product) =>
        set((state) => ({ products: [...state.products, product] })),
      removeProduct: async (id) => {
        set((state) => ({
          products: state.products.filter((product) => product.userId !== id),
        }));
      },
      updateProduct: async (id: number, quantity: number) => {
        set((state) => ({
          products: state.products.map((product) =>
            product.id === id ? { ...product, quantity } : product
          ),
        }));
      },
      reset: () => set({ products: [] }),
    }),
    { name: "product-store" }
  )
);

export const clearLocalStorage = () => {
  localStorage.removeItem("product-store"); // Remove the key used for persistence
  useProductStore.getState().reset(); // Reset the store to initial values
};
