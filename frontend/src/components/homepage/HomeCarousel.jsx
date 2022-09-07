import { useContext } from 'react';
import ProductsContext from '../../context/products';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { useEffect } from 'react';

function HomeCarousel() {

    const [products, setProducts] = useState([])

    const { allProducts } = useContext(ProductsContext)

    useEffect(() => {
        const results = allProducts.slice(0, 5)
        setProducts(results)
    }, [allProducts])

    return (
        <Carousel>
            {
                products.map((product) => {
                    return (
                        <Carousel.Item key={product._id}>
                            <img
                                className="img-fluid"
                                src={product.image}
                            />
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    );
}

export default HomeCarousel;