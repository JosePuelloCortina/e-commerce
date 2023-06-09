import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { User } from "../../entities/users/User";

export const allUsers = async(req: Request, res: Response) => {
    try {
        const users = await AppDataSource.getRepository(User).find({
            relations:['role', 'address', 'profiles', 'orders'],
        })   
        if(!users.length){
            return res.status(200).json({message:"No se encontraron usuarios"})
        }     
        return res.json(users);
    } catch (error) {
        if(error instanceof Error) { 
            return res.status(500).json({message: error.message});       
        }
    }
}