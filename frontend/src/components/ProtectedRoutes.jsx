import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import ProductsContext from "../context/products";


const ProtectedRoutes = () => {
    const { cartState } = useContext(ProductsContext)
    const { userInfo } = cartState

    const location = useLocation()

    return (
        userInfo.email ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default ProtectedRoutes