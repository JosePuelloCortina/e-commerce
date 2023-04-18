import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { Product } from "../../entities/products/Product";

export const getProduct = async(req: Request, res: Response) => {
    try {        
        const { id} = req.params
        const product = await AppDataSource.getRepository(Product).findOne({
            where: { id: parseInt(id)},
            relations: ['categories', 'details']
        })
        if(!product?.available){
            return res.status(404).json({message: "Noy existe este product"})
        }
        return res.json(product)
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }        
    }
}