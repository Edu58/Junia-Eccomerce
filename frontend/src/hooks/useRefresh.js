import jwt_decode from "jwt-decode";
import { useContext } from "react";
import ProductsContext from "../context/products";
import axiosClient from "../components/Axios";

const useRefreshToken = () => {
    const { setAuthToken, cartDispatch } = useContext(ProductsContext)

    const refresh = async () => {
        const response = await axiosClient.get('/auth/refresh', {
            withCredentials: true
        })

        setAuthToken(response?.data?.accessToken)

        const userInfo = jwt_decode(response?.data?.accessToken).userInfo

        cartDispatch({
            type: "USER_LOGIN",
            payload: userInfo
        })

        return response.data?.accessToken
    }

    return refresh
}

export default useRefreshToken