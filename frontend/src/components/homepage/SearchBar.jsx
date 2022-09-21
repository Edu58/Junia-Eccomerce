import './SearchBar.scss'
import { BiUser } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ProductsContext from '../../context/products';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const { cartState, searchItemInStore, authToken, cartDispatch } = useContext(ProductsContext)
    const { cart } = cartState

    const navigate = useNavigate()

    const searchFormHandler = (e) => {
        e.preventDefault()

        searchItemInStore(searchTerm)

        navigate('/search')
    }

    const handleLogout = () => {
        cartDispatch({
            type: "USER_LOGOUT"
        })
    }

    return (
        <div className="top-bar py-4">
            <div className="container">
                <Link to="/" className='brand text-decoration-none text-dark'>
                    <p className='fs-3 fw-bolder text-light'>Junia</p>
                </Link>
                <div className="search">
                    <form className='d-flex' onSubmit={searchFormHandler}>
                        <input type="search" name="product" className='form-control' placeholder='search products' onChange={(e) => setSearchTerm(e.target.value)} defaultValue={searchTerm} required />
                        <button type='submit' className="btn fw-bold ms-2">search</button>
                    </form>
                </div>

                <div className='account d-flex align-items-center'>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle text-light border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <BiUser size={25} />
                            <span className='ms-2'>Account</span>
                        </button>
                        <ul className="dropdown-menu text-center py-3">
                            {
                                authToken
                                    ?
                                    <>
                                        <li className='mb-2'><Link to="/login">profile</Link></li>
                                        {
                                            Object.values(cartState.userInfo.roles).find((role) => role === 1555)
                                                ?
                                                <li className='mb-2'><Link to="/admin">dashboard</Link></li>
                                                :
                                                ''
                                        }
                                        <li className='mb-2'><Link to="/orders-list">orders</Link></li>
                                        <li className='small mb-2'>welcome, {cartState.userInfo.email}</li>
                                        <li className='mt-4 text-danger fw-bold' role="button" onClick={handleLogout}>logout</li>
                                    </>
                                    :
                                    <>
                                        <li className='mb-2'><Link to="/login">login</Link></li>
                                        <li><Link to="/signup">register</Link></li>
                                    </>
                            }
                        </ul>
                    </div>

                    <div>
                        <Link to="/cart" className='text-decoration-none text-dark'>
                            <div className="d-flex align-items-center ms-4 text-light" role="button">
                                <HiOutlineShoppingCart size={25} />
                                <span className='fw-bold'>Cart</span>
                                {
                                    cart.cartItems.length > 0 ? <sup className='fs-6 badge bg-secondary'>
                                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                                    </sup> : ''
                                }
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar