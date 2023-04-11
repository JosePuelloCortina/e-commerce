import { Request, Response } from "express";
import { Role } from "../entities/Role";

const roles = [
    {
        "id": 1,
        "role": "admin",
    },
    {
        "id": 2,
        "role": "buyer"
    }
]
 
export const initializeRole = async() => {
    try {       
        for(let r of roles) {
            let rol:object = {
                id: r.id,
                role: r.role
            }
            const createdRole = await Role.create(rol);
            await createdRole.save();
        }
    } catch (error) {
        if(error instanceof Error) {
            return error.message
        }       
    }
}

