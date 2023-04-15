import { Request, Response } from "express";
import bcrypt  from "bcryptjs";

import { AppDataSource } from "../../db";
import { User } from "../../entities/users/User";
import { validatePassword, validateEmail } from "./Validator";

export const CreateUser = async(req: Request, res: Response) => { 
    try { 
        const { name, last_name, email, phone, password, role, address, profiles} = req.body;    
        if(!name || !last_name || !email || !phone || !password || !role || !address || !profiles){
            return res.status(400).json({error: "Bad request, missing data"})
        }
        const userBody = await User.findOne({
            where: { email: req.body.email}
        })
        if(!validateEmail(email)) {
            return res.status(400).json({ message: "Email is not valid" });
        }
        if(!validatePassword(password)) {
            return res.status(400).json({ message: "Password is not valid" });
        }
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