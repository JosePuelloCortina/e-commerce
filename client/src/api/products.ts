import axios from '../libs/axios'

export const productsRequest = async () =>{
    return await axios.get('/products')
}