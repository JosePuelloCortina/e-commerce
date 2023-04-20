import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { Order } from "../../entities/orders/Order";

export const deleteOrder = async(req: Request, res: Response) => {
    try {
        const { orderNumber } = req.params;
        const orderRepository = await AppDataSource.getRepository(Order)
        const orderExists = await orderRepository.findOne({
            where: { order_number: orderNumber },
            relations: ['user', 'products']
        })
        if(!orderExists){
            return res.status(404).json({message: "Order not found"})
        }
        await orderRepository.remove(orderExists)
        return res.status(200).json({orderRepository, message: "Order deleted successfully"})
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}