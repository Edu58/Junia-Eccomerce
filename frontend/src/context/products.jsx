import { createContext } from "react";
import { useState } from "react";
import axiosClient from '../components/Axios'

const ProductsContext = createContext()
export default ProductsContext

export const ProductsProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [electronics, setElectronics] = useState([])
    const [jewelery, setJewelery] = useState([])
    const [mensClothing, setMensClothing] = useState([])
    const [womensClothing, setWomensClothing] = useState([])
    const [errors, setErrors] = useState('')

    const fetchCategories = async () => {
        try {
            const result = await axiosClient('/products/categories')
            setCategories(result.data)
        } catch (error) {
            setErrors(error.message)
            console.log(error)
        }
    }

    const fetchElectronics = async () => {
        try {
            const result = await axiosClient('/products/category/electronics')
            setElectronics(result.data)
        } catch (error) {
            setErrors(error.message)
            console.log(error)
        }
    }

    const fetchJewelery = async () => {
        try {
            const result = await axiosClient('/products/category/jewelery')
            setJewelery(result.data)
        } catch (error) {
            setErrors(error.message)
            console.log(error)
        }
    }

    const fetchMensClothing = async () => {
        try {
            const result = await axiosClient("/products/category/men's clothing")
            setMensClothing(result.data)
        } catch (error) {
            setErrors(error.message)
            console.log(error)
        }
    }

    const fetchWomensClothing = async () => {
        try {
            const result = await axiosClient("/products/category/women's clothing")
            setWomensClothing(result.data)
        } catch (error) {
            setErrors(error.message)
            console.log(error)
        }
    }


    let values = {
        categories: categories,
        jewelery: jewelery,
        electronics: electronics,
        mensClothing: mensClothing,
        womensClothing: womensClothing,
        errors: errors,
        fetchCategories: fetchCategories,
        fetchJewelery: fetchJewelery,
        fetchElectronics: fetchElectronics,
        fetchMensClothing: fetchMensClothing,
        fetchWomensClothing: fetchWomensClothing
    }

    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    )

}
