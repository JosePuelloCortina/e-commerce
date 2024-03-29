import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { Order } from "../../entities/orders/Order";
import { User } from "../../entities/users/User";

export const createOrder = async(req: Request, res: Response) => {
    try {
        const { userId } = req.params
        const { productIds, quantity} = req.body
        const user = await AppDataSource.getRepository(User).findOne({
            where: {id: parseInt(userId)},
            relations: ['role']
        })
        const products = await AppDataSource.query(`SELECT * FROM product WHERE id IN (${productIds.join(',')})`)
        if(!user){return res.status(404).json({ message: "User not found"})}
        if(user.role.role === 'supplier' ){
            return res.status(401).json({message: "Not authorized"})
        }
        if(!products.length){ return res.status(404).json({ message: "Product not found"})}
        let totalAmount = 0
        for (let i = 0; i < products.length; i++) {
            totalAmount += parseInt(products[i].unit_price);
        }
        const orderRepository = await AppDataSource.getRepository(Order)
        const order = new Order()
        order.quantity = quantity
        order.total_amount = totalAmount * quantity
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