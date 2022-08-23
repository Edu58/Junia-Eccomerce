import './SearchBar.scss'
import { BiSearchAlt2, BiUser } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";


const SearchBar = () => {
    return (
        <div className="top-bar bg-light py-3">
            <div className="container">
                <p className='fs-3 fw-bolder'>Jumia</p>

                <div className="search d-flex">
                    <input type="search" name="product" className='form-control' placeholder='search products' />
                    <button className="btn text-light fw-bold ms-2">search</button>
                </div>

                <div className='account d-flex'>
                    <div className="d-flex align-items-center">
                        <BiUser size={25} />
                        <span className='ms-2'>Account</span>
                    </div>
                    <div className="d-flex align-items-center ms-4">
                        <AiOutlineQuestionCircle size={25} />
                        <span className='ms-2'>Help</span>
                    </div>
                    <div className="d-flex align-items-center ms-4">
                        <HiOutlineShoppingCart size={25} />
                        <span className='ms-2'>Cart</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar