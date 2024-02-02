import { Role } from "../../entities/users/Role";
import { roles } from "../../utils/data/roles";
 
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

