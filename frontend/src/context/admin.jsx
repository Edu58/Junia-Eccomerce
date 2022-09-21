import { createContext, useState, useEffect, useReducer } from "react";
import { axiosPrivateClient } from "../components/Axios";

const AdminContext = createContext()
export default AdminContext

export const AdminProvider = ({ children }) => {
    const [adminDashboardState, setAdminDashbosrdState] = useReducer(adminDashboardReducer, {
        users: [],
        categories: [],
        products: [],
        orders: []
    })

    function adminDashboardReducer(state, action) {
        switch (action.type) {
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