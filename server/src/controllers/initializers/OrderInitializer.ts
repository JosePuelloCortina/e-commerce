import { AppDataSource } from "../../db";
import { Order } from "../../entities/orders/Order";
import { orders } from "../../utils/data/orders";
import { User } from "../../entities/users/User";

export const orderInitialize = async() =>{
    try {
        for(let o of orders){
            const user = await AppDataSource.getRepository(User).findOne({
                where: {id: o.userId },
                relations: ['role']
            }) 
            const products = await AppDataSource.query(`SELECT * FROM product WHERE id IN (${o.prodoctId.join(',')})`)
            if(!user){return console.log("Usuario no encontrado")}
            if(!products.length){
                console.log('Products not found')
            }
            let totalAmount = 0
            for (let i = 0; i < products.length; i++) {
                totalAmount += parseInt(products[i].unit_price);
            }
            if(user.role.role !== 'supplier'){
                let order: object ={
                    id: o.orderId,
                    quantity: o.quantity,
                    total_amount: totalAmount * o.quantity,
                    commission_amount: (totalAmount/5)*1,
                    order_number: o.order_number,
                    user: o.userId,
                    products: products
                }
                const createdOrder = await Order.create(order);
                await createdOrder.save()
            }else{
                console.log('Not authorized')
            }
        }
       
    } catch (error) {
        if(error instanceof Error){
            return error.message
        }        
    }
}