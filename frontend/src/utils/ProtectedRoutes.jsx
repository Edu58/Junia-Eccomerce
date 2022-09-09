import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import ProductsContext from "../context/products";


const ProtectedRoutes = () => {
    const { authToken } = useContext(ProductsContext)

    const location = useLocation()

    return (
        authToken ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default ProtectedRoutes