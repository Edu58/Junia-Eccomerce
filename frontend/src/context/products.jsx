import { createContext } from "react";
import { useEffect } from "react";
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
    const [allProducts, setAllProducts] = useState([])
    const [errors, setErrors] = useState('')

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const result = await axiosClient('/products/categories')
                setCategories(result.data)
            } catch (error) {
                setErrors(error.message)
                console.log(error)
            }
        }

        const fetchAllProducts = async () => {
            try {
                const result = await axiosClient('/products')
                setAllProducts(result.data)
            } catch (error) {
                setErrors(error.message)
            }
        }

        fetchCategories()
        fetchAllProducts()
    }, [])


    let values = {
        categories: categories,
        allProducts: allProducts,
        jewelery: jewelery,
        electronics: electronics,
        mensClothing: mensClothing,
        womensClothing: womensClothing,
        errors: errors,
    }

    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    )

}
