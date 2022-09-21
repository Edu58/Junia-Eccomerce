import { createContext, useState, useEffect } from "react";

const AdminContext = createContext()
export default AdminContext

export const AdminProvider = ({ children }) => {


    let adminValues = {
        admin: true
    }

    return (
        <AdminContext.Provider value={adminValues}>
            {children}
        </AdminContext.Provider>
    )
}