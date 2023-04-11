import { Request, Response } from "express";

import { AppDataSource } from "../db";
import { User } from "../entities/User";


export const getUsers = async(req: Request, res: Response) => {
    try {
        const users = await AppDataSource.getRepository(User).find({
            relations:['role', 'address', 'profiles'],
        })        
        return res.json(users);
    } catch (error) {
        if(error instanceof Error) { 
            return res.status(500).json({message: error.message});       
        }
    }
}

export const createUser = async(req: Request, res: Response) => {
    try {
        const { name, last_name, email, phone, password, role, address, profiles} = req.body;    

        if(!name || !last_name || !email || !phone || !password || !role || !address || !profiles){
            return res.status(400).json({error: "Bad request, missing data"})
        }
        const userBody = await User.findOne({
            where: { email: req.body.email}
        })
        if(!userBody){
            const userRepository = AppDataSource.getRepository(User);
            const user = new User()
            user.name = name
            user.last_name = last_name
            user.password = password
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
