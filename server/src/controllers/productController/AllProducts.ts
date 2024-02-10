import { Request, Response } from "express";
import { Product } from "../../entities/products/Product";
import { AppDataSource } from "../../db";

export const allProducts = async ( req: Request, res: Response) =>{
    try {
        const products = await AppDataSource.getRepository(Product).find({
            relations:['category', 'productDetails']
        })
        if(!products.length){
            return res.status(200).json({message:"No se encontraron productos"})
        }
        return res.json(products)        
    } catch (error) {
        if(error instanceof Error) { 
            return res.status(500).json({message: error.message});
        }
    }
}


