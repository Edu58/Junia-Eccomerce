import useRefreshToken from "../hooks/useRefresh";
import { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/products";

import React from 'react'
import { Outlet } from "react-router-dom";

const persistLogin = () => {
    const { authToken } = useContext(ProductsContext)
    const [isLoading, setIsLoading] = useState(true)

    const refresh = useRefreshToken()

    useEffect(() => {
        const verifyIfHasToken = async () => {
            try {
                await refresh()
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        !authToken && localStorage.getItem('status') === '1' ? verifyIfHasToken() : setIsLoading(false)

    }, [])

    return (
        <>
            {
                isLoading ? <p>Loading...</p> : <Outlet />
            }
        </>
    )
}

export default persistLogin