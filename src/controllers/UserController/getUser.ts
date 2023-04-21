import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { User } from "../../entities/users/User";


export const getUser = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await AppDataSource.getRepository(User).findOne({
            where: {id: parseInt(id)},
            relations: ['role','profiles', 'address', 'orders']
        },)
        return  res.json(user)        
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }
        
    }
}