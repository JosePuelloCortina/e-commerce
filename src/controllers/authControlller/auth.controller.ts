import { Request, Response } from "express"
import { validateEmail, validatePassword } from "../userController/Validator"
import { AppDataSource } from "../../db"

import jwt from 'jsonwebtoken'
import { User } from "../../entities/users/User"
import bcrypt  from "bcryptjs";

export const loginHandler = async (req: Request, res:Response) => 
{
    try {
        const { email, password } = req.body
    if(!validateEmail(email)) {
        return res.status(400).json({ message: "Email is not valid" });
    }
    if(!validatePassword(password)) {
        return res.status(400).json({ message: "Password is not valid" });
    }
    const user = await AppDataSource.getRepository(User).findOne({where: { email: email}}) 
    if(!user) {return res.status(400).json({ message: "user not found"});}

    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword) {return res.status(400).json({ message: "password not valid"});}

    const token = jwt.sign({user}, 'secret',{expiresIn: 60 * 60 * 24 })
    return res.json({
        token,
        error: null,
        data: 'exito bienvenido',
        user
    })
    } catch (error) {
      if(error instanceof Error){
        return res.status(400).json({message: error.message})
      }  
    }
    
}

export const profileHandler = (req: Request, res:Response) =>
{
    return res.json({
        profile:{
            user: req.user
        },
        message: "data"
    });

}