import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product{
    id: number;
    code: number;
    name: string;
    description: string;
    unit_price: number;
    stock: number;
    available: number;
    created_at: Date;
    updated_at: Date;
    productDetails: []
}

type State = {
    products: Product[]
}

type Actions = {
    setProducts: (product: Product[]) => void
}

export const useProductsStore = create(persist <State & Actions>(
    (set) => ({
        products: [],
        setProducts: (products: Product[]) => {
            const currentProductsJSON = JSON.stringify(products);
            const newProductsJSON = JSON.stringify(products);
          
            if (currentProductsJSON !== newProductsJSON) {
              set((state) => ({
                ...state,
                products,
              }));
            }
          }
    }),{
        name: 'products'
    }
))