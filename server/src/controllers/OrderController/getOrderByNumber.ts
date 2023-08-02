import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { Order } from "../../entities/orders/Order";

export const getOrderByNumber = async(req: Request, res: Response) => {
    try {
        const { orderNumber } = req.params
        const order = await AppDataSource.getRepository(Order).findOne({
            where: { order_number: orderNumber},
            relations: ['user', 'products']
        })
        if (!order) {
            return res.status(404).json({ message: "order not found"})
        }
        return res.status(200).json(order)
    } catch (error) {
        if(error instanceof Error ){
            return res.status(500).json({message: error.message})
        }
    }
}