import { Request, Response } from "express";
import { User } from "../../entities/users/User";
import { AppDataSource } from "../../db";
import { Profile } from "../../entities/users/Profile";
import { Address } from "../../entities/users/Address";
import { Order } from "../../entities/orders/Order";


export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userRepository = AppDataSource.getRepository(User)
        const userExists = await userRepository.findOne({
            where:{id: parseInt(id)},
            relations:['role', 'address', 'profiles', 'orders']
        });
        if (!userExists) {
            return res.status(404).json({ message: "User not found"})
        }
        await AppDataSource.getRepository(Profile).remove(userExists.profiles)
        await AppDataSource.getRepository(Address).remove(userExists.address)
        await AppDataSource.getRepository(Order).remove(userExists.orders)
        await userRepository.remove(userExists)       
        return res.status(200).json(userRepository);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }        
    }
}