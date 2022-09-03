import { createContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axiosClient from '../components/Axios'

const ProductsContext = createContext()
export default ProductsContext



export const ProductsProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [errors, setErrors] = useState('')
    const [cartState, cartDispatch] = useReducer(cartReducer, { cart: { cartItems: [], } })

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const result = await axiosClient('/products/categories')
                setCategories(result.data)
            } catch (error) {
                setErrors(error.message)
                console.log(error.message)
            }
        }

        const fetchAllProducts = async () => {
            try {
                const result = await axiosClient('/products')
                setAllProducts(result.data)
            } catch (error) {
                setErrors(error.message)
                console.log(error.message)
            }
        }

        fetchCategories()
        fetchAllProducts()
    }, [])


    function cartReducer(state, action) {
        switch (action.type) {
            case "ADD_TO_CART":
                const newItem = action.payload
                const itemsExists = state.cart.cartItems.find((item) =>
                    item.id == newItem.id
                )

                const cartItems = itemsExists
                    ? state.cart.cartItems.map((item) =>
                        item.id == itemsExists.id ? newItem : item
                    )
                    :
                    [...state.cart.cartItems, newItem]

                return { ...state, cart: { ...state.cart, cartItems } }

            case "DELETE_FROM_CART": {
                const cartItems = state.cart.cartItems.filter((item) =>
                    item.id !== action.payload.id
                )

                return { ...state, cart: { ...state.cart, cartItems } }
            }
            default:
                return state;
        }
    }


    let values = {
        categories,
        allProducts,
        cartState,
        cartDispatch,
        errors
    }

    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    )

}
