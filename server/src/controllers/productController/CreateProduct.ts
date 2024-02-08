import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { Product } from "../../entities/products/Product";
import { User } from "../../entities/users/User";
import { Category } from "../../entities/products/Category";

export const createProduct = async(req: Request, res: Response) => {
    try {
        const { userId } = req.params
        const {code, name, description, unit_price, stock, details, category, user} = req.body
        if(!code || !name || !description || !unit_price || !stock || !details || !category){
            return res.status(400).json({message: "Bad request, missing data"})
        }
        const categoryExists = await Category.findOne({
            where: { id: category}
        })
        if(!categoryExists){return res.status(404).json({message: "category not found"})}
        const userPermissions = await User.findOne({
            where: { id: parseInt(userId)},
            relations: ['role']
        })
        if(!userPermissions){return res.status(404).json({message: "user not found"})}
        if(userPermissions.role.role === 'buyer' ){
            return res.status(401).json({message: "Not authorized"})
        }
        const uniqueProduct = await AppDataSource.getRepository(Product).findOne({
            where: { code: req.body.code}
        })
        if(!uniqueProduct){
            const productRepository = AppDataSource.getRepository(Product)
            const product = new Product()
            product.code = code
            product.name = name
            product.description = description
            product.unit_price = unit_price
            product.stock = stock
            product.productDetails = details 
            product.category = category
            product.user = user
            const createProduct = await productRepository.save(product)
            return res.status(200).json(createProduct)
        }
        return res.status(500).json({message:"Ya existe este product"})
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }        
    }
}