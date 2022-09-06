import '../searchPage/SearchPage.scss'
import { useContext } from "react"
import ProductsContext from "../../context/products"
import Card from "../../components/card/Card"
import Categories from '../../components/categories/Categories'
import { Link, useParams } from 'react-router-dom'


const ByCategory = () => {

    const { productsByCategory, categories } = useContext(ProductsContext)

    const { category } = useParams()

    return (
        <div className="container search-page py-4">
            <Categories categories={categories} />

            <Card>
                <p className="fs-4 text-center pb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                {
                    productsByCategory.length > 0
                        ?
                        <div className="search-results">
                            {productsByCategory.map((product) => {
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

export default ByCategory