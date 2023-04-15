import { Request, Response } from "express";
import { User } from "../../entities/users/User";
import { AppDataSource } from "../../db";
import { Profile } from "../../entities/users/Profile";
import { Address } from "../../entities/users/Address";


export const DeleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userRepository = AppDataSource.getRepository(User)
        const userExists = await userRepository.findOne({
            where:{id: parseInt(id)},
            relations:['role', 'address', 'profiles']
        });
        if (!userExists) {
            console.log(" entra")
            return res.status(404).json({ message: "User not found"})
        }
        await AppDataSource.getRepository(Profile).remove(userExists.profiles)
        await AppDataSource.getRepository(Address).remove(userExists.address)
        await userRepository.remove(userExists)       
        return res.status(200).json(userRepository);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }        
    }
}