import { Request, Response } from "express";
import { User } from "../../entities/User";


export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await User.delete({ id: parseInt(id)});
        if (result.affected === 0) {
            return res.status(404).json({ message: "User not found"})
        }
        return res.sendStatus(200);
        
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }        
    }
}