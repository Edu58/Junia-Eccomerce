import './SearchPage.scss'
import { useContext } from "react"
import Categories from "../../components/categories/Categories"
import ProductsContext from '../../context/products'
import Card from "../../components/card/Card"
import { Link } from 'react-router-dom'


const SearchPage = () => {
    const { categories, searchResults } = useContext(ProductsContext)

    return (
        <div className="container search-page py-4">
            <Categories categories={categories} />

            <Card>
                {
                    searchResults.length > 0
                        ?
                        <div className="search-results">
                            {searchResults.map((product) => {
                                return (
                                    <div className='search-product' key={product.id}>
                                        <Link to={`/product/${product.category}/${product.id}`} className='text-decoration-none text-dark'>

                                            <img src={product.image} alt="" className='img-fluid rounded' />

                                            <div>
                                                <span className='small title'>{product.title.slice(0, 15)}...</span>
                                                <br />
                                                <span className="fw-bold">KSH {product.price}</span>
                                            </div>

                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <p className="fs-4 text-center">No products found</p>
                }
            </Card>
        </div>
    )
}

export default SearchPage