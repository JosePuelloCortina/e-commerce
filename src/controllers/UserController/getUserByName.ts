import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { User } from "../../entities/users/User";
import { Like } from "typeorm";

export const getUserByName = async(req: Request, res: Response) => {
    try {
        const { name } = req.query;
        const users = await AppDataSource.getRepository(User).find({
            where: {
                name: Like(`%${name}%`),
              }
        });
        if(!users.length){ return res.status(404).json({message: "User not found"})}
        res.status(200).json(users);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }        
    }
}