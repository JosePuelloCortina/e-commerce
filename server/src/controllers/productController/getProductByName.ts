import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { Product } from "../../entities/products/Product";
import { Like } from "typeorm";

export const getProductByName = async(req: Request, res: Response) => {
    try {
        const { name } = req.query;
        const products = await AppDataSource.getRepository(Product).find({
            where: {
                name: Like(`%${name}%`),
              }
        });
        if(!products.length){ return res.status(404).json({message: "Product not found"})}
        res.status(200).json(products);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }        
    }
}