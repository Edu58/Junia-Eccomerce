import './ProductRows.scss'
import { Link } from 'react-router-dom'

const ProductRows = ({ categoryName, products }) => {
    return (
        <div className='top-selling container bg-light rounded mt-5'>
            <p className="fs-5 fw-bold mb-4">{categoryName}</p>

            <div className="products d-flex align-items-center text-center">
                {products.map((product) => {
                    return (
                        <div className='product'>
                            <Link to='/product' className='text-decoration-none text-dark' key={product.id}>

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
        </div>
    )
}

export default ProductRows