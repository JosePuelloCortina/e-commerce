import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { Product } from "../../entities/products/Product";

export const createProduct = async(req: Request, res: Response) => {
    try {        
        const {code, name, description, unit_price, stock, details, categories } = req.body
        if(!code || !name || !description || !unit_price || !stock || !details || !categories){
            return res.status(400).json({message: "Bad request, missing data"})
        }
        const uniqueProduct = await AppDataSource.getRepository(Product).findOne({
            where: { code: req.body.code}
        })
        if(!uniqueProduct){
            const productRepository = await AppDataSource.getRepository(Product)
            const product = new Product()
            product.code = code
            product.name = name
            product.description = description
            product.unit_price = unit_price
            product.stock = stock
            product.details = details
            product.categories = categories
            const createProduct = await productRepository.save(product)
            return res.status(200).json(createProduct)
        }else{
            return res.status(500).json({message:"Ya existe este product"})
        }
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }        
    }
}