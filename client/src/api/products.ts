import axios from '../libs/axios'

export const productsRequest = async () =>{
    return axios.get('/products')
}