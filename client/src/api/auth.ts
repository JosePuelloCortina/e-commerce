import axios from '../libs/axios'

export const loginRequest = async (email: string, password: string) =>{
    return await axios.post('/login',{
        email,
        password
    })
    
}

export const userRequest = async (id:number) => {
    console.log( id, 'user request')
    return await axios.get(`/users/${id}`, )
}
