import { Request, Response } from "express";
import { User } from "../../entities/User";


export const getUser = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findOneBy({id: parseInt(id)})
        return  res.json(user)        
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }
        
    }
}