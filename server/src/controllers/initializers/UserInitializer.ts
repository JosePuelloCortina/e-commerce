
import { AppDataSource } from "../../db";
import { Role } from "../../entities/users/Role";
import { User } from "../../entities/users/User";
import bcrypt  from "bcryptjs";

const users = [
    {
        "id": 1,
        "name": "Jose",
        "last_name": "puello",
        "email": "puello@puello.com",
        "password": "Jose123@!",
        "phone": "3006005989",
        "active": true,
        "roleId": 1 
    },
    {
        "id": 2,
        "name": "Loki",
        "last_name": "Puello",
        "email": "loki@loki.com",
        "password": "Loki123@!",
        "phone": "3151515151",
        "active": true,
        "roleId": 2
    },
    {
        "id": 3,
        "name": "Thor",
        "last_name": "Castro",
        "email": "thor@thor.com",
        "password": "Thor123@!",
        "phone": "3213213213",
        "active": true,
        "roleId": 3
    }
]

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