import { createContext } from "react";
import { useEffect, useState } from "react";
import axiosClient from '../components/Axios'

const ProductsContext = createContext()
export default ProductsContext

export const ProductsProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [error, setError] = useState('')

    const fetchCategories = async () => {
        try {
            const result = await axiosClient('/products/categories')
            setCategories(result.data)
        } catch (error) {
            setError(error.message)
            console.log(error)
        }
    }


    let values = {
        categories: categories,
        fetchCategories: fetchCategories
    }

    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    )

}
