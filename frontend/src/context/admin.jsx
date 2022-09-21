import { createContext, useState, useEffect, useReducer } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const AdminContext = createContext()
export default AdminContext

export const AdminProvider = ({ children }) => {
    const axiosPrivate = useAxiosPrivate()
    const [adminDashboardState, setAdminDashbosrdState] = useReducer(adminDashboardReducer, {
        users: [],
        categories: [],
        products: [],
        orders: []
    })

    function adminDashboardReducer(state, action) {
        switch (action.type) {
            case "GET_USERS": {
                const {data} = await 
            }
            default:
                return state
        }
    }

    let adminValues = {
        admin: true
    }

    return (
        <AdminContext.Provider value={adminValues}>
            {children}
        </AdminContext.Provider>
    )
}