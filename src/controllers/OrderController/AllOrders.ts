import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { Order } from "../../entities/orders/Order";

export const allOrders = async (req: Request, res: Response) => {
    try {
        const orders = await AppDataSource.getRepository(Order).find({
            relations: ['user', 'products']
        })
        if(!orders.length){
            return res.status(200).json({message: "orders not found"})
        }
        return res.status(200).json(orders)        
    } catch (error) {
        if(error instanceof Error ){
            return res.status(500).json({ message: error.message });
        }       
    }
}