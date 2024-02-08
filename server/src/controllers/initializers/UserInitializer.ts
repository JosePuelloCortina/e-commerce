
import { AppDataSource } from "../../db";
import { Role } from "../../entities/users/Role";
import { User } from "../../entities/users/User";
import bcrypt  from "bcryptjs";
import { users } from "../../utils/data/user";

export const userInitialize = async() =>{
    try {
        for(let u of users){
            const existingUser = await AppDataSource.getRepository(User).findOne({
                where: {email: u.email}
            })
            const hashPassword = await bcrypt.hash(u.password, 10);
            if(!existingUser){
                let user : object ={
                    id: u.id,
                    name: u.name,
                    last_name: u.last_name,
                    email: u.email,
                    password: hashPassword,
                    phone: u.phone,
                    active: u.active,
                    role: u.roleId
                } 
                const createdUser = await User.create(user);
                await createdUser.save()
            } 
        }
    } catch (error) {
        if(error instanceof Error){
            return error.message
        }        
    }
} 