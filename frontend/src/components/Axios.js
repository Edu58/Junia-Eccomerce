import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

const axiosClient = axios.create({
    baseURL: BASE_URL
})


// to use with axios interceptors that will add the accessToken
export const axiosPrivateClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

export default axiosClient