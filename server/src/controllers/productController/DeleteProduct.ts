import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { Product } from "../../entities/products/Product";
import { ProductDetail } from "../../entities/products/ProductDetail";
import { Category } from "../../entities/products/Category";

export const deleteProduct = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        const productRepository = AppDataSource.getRepository(Product)
        const productExists = await productRepository.findOne({
            where: { id: parseInt(id) },
            relations: ['productDetails', 'categories']
        })
        if(!productExists){
            return res.status(404).json({ message: "Product not found"})
        }
        await AppDataSource.getRepository(ProductDetail).remove(productExists.productDetails)
        await AppDataSource.getRepository(Category).remove(productExists.categories)
        await productRepository.remove(productExists)
        return res.status(200).json({productRepository,  message: "product successfully removed"})
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }        
    }
}