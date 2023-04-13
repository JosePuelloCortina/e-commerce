import { Request, Response } from "express";
import bcrypt  from "bcryptjs";

import { AppDataSource } from "../../db";
import { User } from "../../entities/User";
import { body, validationResult } from "express-validator";

export const createUser = async(req: Request, res: Response) => {
    try {
        const { name, last_name, email, phone, password, role, address, profiles} = req.body;    
        if(!name || !last_name || !email || !phone || !password || !role || !address || !profiles){
            return res.status(400).json({error: "Bad request, missing data"})
        }
        const userBody = await User.findOne({
            where: { email: req.body.email}
        })
        if(password.length < 5){ return res.status(400).json({ message: "incomplete password" });}
        
        const hashPassword = await bcrypt.hash(password, 10);
        if(!userBody){
            const userRepository = AppDataSource.getRepository(User);
            const user = new User()
            user.name = name
            user.last_name = last_name
            user.password = hashPassword
            user.email = email
            user.phone = phone
            user.role = role
            user.address = address
            user.profiles = profiles
            const createUser = await userRepository.save(user)           
            return res.status(201).json(createUser);
        }else{
            return res.status(500).json({error: "Ya existe un usuario con este correo"})
        }
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message})
        }        
    }
}