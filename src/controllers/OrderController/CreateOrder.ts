import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { Order } from "../../entities/orders/Order";
import { Product } from "../../entities/products/Product";
import { User } from "../../entities/users/User";

export const createOrder = async(req: Request, res: Response) => {
    try {
        const { userId } = req.params
        const { productIds, quantity} = req.body
        const user = await AppDataSource.getRepository(User).findOne({where: {id: parseInt(userId)}})
        const products = await AppDataSource.query(`SELECT * FROM product WHERE id IN (${productIds.join(',')})`)
        let totalAmount = 0
        for (let i = 0; i < products.length; i++) {
            totalAmount += parseInt(products[i].unit_price);
        }
        if(!user){return res.status(404).json({ message: "User not found"})}
        if(!products.length){ return res.status(404).json({ message: "Product not found"})}
        const orderRepository = await AppDataSource.getRepository(Order)
        const order = new Order()
        order.quantity = quantity
        order.total_amount = totalAmount
        order.commission_amount = (totalAmount/5)*1
        order.generateOrderNumber()
        order.user = user
        order.products = products 
        const createOrder = await orderRepository.save(order)
        return res.status(200).json(createOrder)
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message });
        }        
    }    
}