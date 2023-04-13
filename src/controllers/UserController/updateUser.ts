import { Request, Response } from "express";
import { User } from "../../entities/User";
import bcrypt  from "bcryptjs";

export const updateUser = async (req: Request, res: Response) =>{
    try {
        const { id } = req.params
        const { name, last_name, phone, password, role, address, profiles} = req.body;   
        const user = await User.findOneBy({id: parseInt(id)})
        if(!user) return res.status(404).json({ message: "User not found"})
        if(password.length < 5){ return res.status(400).json({ message: "incomplete password" })}
        const hashPassword = await bcrypt.hash(password, 10);
        user.name = name;
        user.last_name = last_name;
        user.phone = phone;
        user.password = hashPassword;
        user.role = role;
        user.address = address;
        user.profiles = profiles;
        await user.save()
        return res.sendStatus(200);        
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message})
        }        
    }
}