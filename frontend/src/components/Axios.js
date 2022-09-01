import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

export default axiosClient