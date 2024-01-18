import { set } from "react-hook-form";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product{
    id: number;
    name: string;
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
        setProducts: (products: Product[]) => 
            set( state => ({
                ...state,
                products,
            }))
    }),{
        name: 'products',
        getStorage: () => localStorage
    }
))