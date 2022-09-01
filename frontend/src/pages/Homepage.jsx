import './Homepage.scss'
import HomeBanner from '../components/homepage/HomeBanner'
import ProductRows from '../components/homepage/ProductRows'
import { useContext } from 'react'
import ProductsContext from '../context/products'
import { useEffect } from 'react'

const Homepage = () => {

    const { jewelery, electronics, mensClothing, womensClothing, fetchJewelery, fetchElectronics, fetchMensClothing, fetchWomensClothing, error } = useContext(ProductsContext)

    useEffect(() => {
        fetchElectronics()
        fetchJewelery()
        fetchMensClothing()
        fetchWomensClothing()
    }, [])

    return (
        <div className='homepage-container'>
            <HomeBanner />

            <ProductRows categoryName="Electronic" products={electronics} />

            <ProductRows categoryName="Jewelery" products={jewelery} />

            <ProductRows categoryName="Men's clothing" products={mensClothing} />

            <div className="pb-5">
                <ProductRows categoryName="Women's clothing" products={womensClothing} />
            </div>
        </div>
    )
}

export default Homepage