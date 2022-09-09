import { useContext } from "react";
import ProductsContext from "../context/products";
import axiosClient from "../components/Axios";

const useRefreshToken = () => {
    const { setAuthToken } = useContext(ProductsContext)

    const refresh = async () => {
        const response = await axiosClient.get('/auth/refresh', {
            withCredentials: true
        })

        setAuthToken(response.data?.accessToken)

        return response.data?.accessToken
    }

    return refresh
}

export default useRefreshToken