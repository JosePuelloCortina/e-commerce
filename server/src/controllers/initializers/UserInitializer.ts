
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
                const user = new User()
                user.id = u.id
                user.name = u.name,
                user.last_name = u.last_name,
                user.email = u.email,
                user.password = hashPassword,
                user.phone = u.phone,
                user.active = u.active

                const role = await AppDataSource.getRepository(Role).findOne({
                    where: {id: u.roleId}
                })
                if(role){
                    user.role = role
                    const createdUser = await User.save(user);
                    await createdUser;
                }else{
                    console.error("No se encontro el Role")
                } 
            }       
              
        }
    } catch (error) {
        if(error instanceof Error){
            return error.message
        }        
    }
}