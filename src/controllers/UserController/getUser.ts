import { Request, Response } from "express";
import { User } from "../../entities/users/User";


export const getUser = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: {id: parseInt(id)},
            relations: ['role','profiles', 'address']
        },)
        return  res.json(user)        
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }
        
    }
}