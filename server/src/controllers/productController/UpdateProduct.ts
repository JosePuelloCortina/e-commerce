import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { Product } from "../../entities/products/Product";

export const updateProduct = async(req: Request, res: Response) => {
    try {        
        const { id } = req.params
        const {name, description, unit_price, stock, available, details, categories } = req.body
        const uniqueProduct = await AppDataSource.getRepository(Product).findOne({
            where: { id: parseInt(id)},
            relations:['productDetails', 'category']
        })
        if(!uniqueProduct) return res.status(404).json({message: "Product not found"})
        uniqueProduct.name = name
        uniqueProduct.description = description
        uniqueProduct.unit_price = unit_price
        uniqueProduct.stock = stock
        uniqueProduct.available = available
        uniqueProduct.productDetails = details
        uniqueProduct.category = categories
        await uniqueProduct.save()
        await AppDataSource.manager.query('DELETE FROM category WHERE productsId IS NULL')
        await AppDataSource.manager.query('DELETE FROM product_detail WHERE productsId IS NULL')
        return res.sendStatus(200)
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }        
    }
}