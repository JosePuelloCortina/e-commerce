import { AppDataSource } from "../../db";
import { Product } from "../../entities/products/Product";
import { products } from "../../utils/data/product";

export const productInitialeze = async() => {
    try {
        for( let p of products){
            
        }
        
    } catch (error) {
        if(error instanceof Error){
            return error.message
        }
        
    }
}