import { Request, Response } from "express";
import { User } from "../../entities/User";


export const updateUser = async (req: Request, res: Response) =>{
    try {
        const { id } = req.params
        const user = await User.findOneBy({id: parseInt(req.params.id)})
        if(!user) return res.status(404).json({ message: "User not found"})
        await User.update({id: parseInt(id)}, req.body)
        return res.sendStatus(200);        
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message})
        }        
    }
}