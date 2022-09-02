import './SearchBar.scss'
import { BiSearchAlt2, BiUser } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ProductsContext from '../../context/products';


const SearchBar = () => {

    const { cartState } = useContext(ProductsContext)
    const { cart } = cartState

    return (
        <div className="top-bar py-4">
            <div className="container">
                <Link to="/" className='text-decoration-none'>
                    <p className='fs-3 fw-bolder text-dark'>Junia</p>
                </Link>
                <div className="search d-flex">
                    <input type="search" name="product" className='form-control' placeholder='search products' />
                    <button className="btn text-light fw-bold ms-2">search</button>
                </div>

                <div className='account d-flex'>
                    <div>
                        <Link to="/cart">
                            <div className="d-flex align-items-center" role="button">
                                <BiUser size={25} />
                                <span className='ms-2'>Account</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/cart">
                            <div className="d-flex align-items-center ms-4" role="button">
                                <AiOutlineQuestionCircle size={25} />
                                <span className='ms-2'>Help</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/cart">
                            <div className="d-flex align-items-center ms-4" role="button">
                                <HiOutlineShoppingCart size={25} />
                                <span className='ms-2'>Cart</span>
                                <sup className='fs-6 badge bg-secondary'>{cart.cartItems.length}</sup>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar