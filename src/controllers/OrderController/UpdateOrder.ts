import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { Order } from "../../entities/orders/Order";

export const updateOrder = async( req: Request, res: Response) => {
    try {
        const { orderNumber } = req.params
        const { quantity, productIds, total_amount } = req.body
        const order = await AppDataSource.getRepository(Order).findOne({
            where: { order_number: orderNumber},
            relations: ['products']
        })
        const products = await AppDataSource.query(`SELECT * FROM product WHERE id IN (${productIds.join(',')})`)
        if(!products.length){
            return res.status(404).json({
                message: "Product not found"
            })
        } 
        if(!order){
            return res.status(404).json({message: "order not found"})
        }
        order.quantity = quantity 
        order.total_amount = total_amount
        order.products = products
        await order.save()
        return res.sendStatus(200)
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }      
    }
}