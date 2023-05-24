import axios from '../libs/axios'

export const loginRequest = async (email: string, password: string) =>{
    return await axios.post('/login',{
        email,
        password
    })
    
}

export const userRequest = async (id:number) => {
    return await axios.get(`/users/${id}`, )
}

export const registerRequest = async (name:string, last_name:string, phone:string, email:string, password:string, role:number, ) => {
    return await axios.post('/users/register',{
        name,
        last_name,
        phone,
        email,
        password,
        role
    })
}
