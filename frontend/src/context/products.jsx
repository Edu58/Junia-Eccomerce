import { createContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axiosClient from '../components/Axios'

const ProductsContext = createContext()
export default ProductsContext



export const ProductsProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState()
    const [categories, setCategories] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [productsByCategory, setProductsByCategory] = useState([])
    const [errors, setErrors] = useState('')
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        userInfo: {},
        cart: {
            cartItems: [],
            shippingAddress: {},
            paymentMethod: ''
        }
    })

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const result = await axiosClient('/products/categories')
                setCategories(result.data)
            } catch (error) {
                setErrors(error.message)
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


    function cartReducer(state, action) {
        switch (action.type) {
            case "ADD_TO_CART":
                const newItem = action.payload
                const itemsExists = state.cart.cartItems.find((item) =>
                    item._id == newItem._id
                )

                const cartItems = itemsExists
                    ? state.cart.cartItems.map((item) =>
                        item._id == itemsExists._id ? newItem : item
                    )
                    :
                    [...state.cart.cartItems, newItem]

                return { ...state, cart: { ...state.cart, cartItems } }

            case "DELETE_FROM_CART": {
                const cartItems = state.cart.cartItems.filter((item) =>
                    item._id !== action.payload._id
                )

                return { ...state, cart: { ...state.cart, cartItems } }
            }

            case "ADD_SHIPPING": {
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        shippingAddress: action.payload
                    }
                }
            }

            case "ADD_PAYMENT_METHOD": {
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        paymentMethod: action.payload
                    }
                }
            }

            case "CLEAR_CART": {
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems: [],
                    }
                }
            }

            case "USER_LOGIN": {
                return {
                    ...state,
                    userInfo: action.payload
                }
            }

            case "USER_LOGOUT": {
                setAuthToken()

                axiosClient.get("/auth/logout", {
                    withCredentials: true
                })

                localStorage.setItem('status', '0')

                return {
                    ...state,
                    userInfo: {},
                    cart: {
                        cartItems: [],
                        shippingAddress: {},
                        paymentMethod: ''
                    }
                }
            }
            default:
                return state;
        }
    }

    function searchItemInStore(keyword) {
        let name = keyword.toLowerCase()

        const results = allProducts.filter((item) => {
            let itemName = item.title.toLowerCase()
            return itemName.indexOf(name) !== -1
        })
        setSearchResults(results)
    }

    function filterByCategory(category) {
        const results = allProducts.filter((item) => {
            return item.category.name == category.toLowerCase()
        })
        setProductsByCategory(results)
    }


    let values = {
        authToken,
        categories,
        allProducts,
        cartState,
        searchResults,
        productsByCategory,
        setAuthToken,
        cartDispatch,
        searchItemInStore,
        filterByCategory,
        errors
    }

    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    )

}
