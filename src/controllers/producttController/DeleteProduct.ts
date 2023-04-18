import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { Product } from "../../entities/products/Product";
import { Detail } from "../../entities/products/Detail";
import { Category } from "../../entities/products/Category";
import { stringify } from "querystring";

export const deleteProduct = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        const productRepository = AppDataSource.getRepository(Product)
        const productExists = await productRepository.findOne({
            where: { id: parseInt(id) },
            relations: ['details', 'categories']
        })
        if(!productExists){
            return res.status(404).json({ message: "Product not found"})
        }
        await AppDataSource.getRepository(Detail).remove(productExists.details)
        await AppDataSource.getRepository(Category).remove(productExists.categories)
        await productRepository.remove(productExists)
        return res.status(200).json({productRepository,  message: "product successfully removed"})
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }        
    }
    
}