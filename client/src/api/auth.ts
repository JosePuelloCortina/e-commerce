import axios from '../libs/axios'

export const loginRequest = async (email: string, password: string) =>{
    return axios.post('/login',{
        email,
        password
    })
}

export const userRequest = async () => {
    return await axios.get('/users')
}
