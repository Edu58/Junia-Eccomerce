import './Homepage.scss'
import HomeBanner from '../components/homepage/HomeBanner'
import ProductRows from '../components/homepage/ProductRows'
import { useContext } from 'react'
import ProductsContext from '../context/products'
import { useEffect } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'

const Homepage = () => {
    const { allProducts, categories, errors } = useContext(ProductsContext)

    const [jewelery, setJewelery] = useState([])
    const [electronics, setElectronics] = useState([])
    const [mensClothing, setMensClothing] = useState([])
    const [womensClothing, setWomensClothing] = useState([])

    useEffect(() => {
        allProducts.map((item) => {
            if (item.category == 'electronics') {
                setElectronics(current => [...current, item])
            } else if (item.category == 'jewelery') {
                setJewelery(current => [...current, item])
            } else if (item.category == "men's clothing") {
                setMensClothing(current => [...current, item])
            } else if (item.category == "women's clothing") {
                setWomensClothing(current => [...current, item])
            }
        })
    }, [allProducts])

    return (
        <div className='homepage-container'>
            <HomeBanner categories={categories} errors={errors} banner={allProducts[1]} />

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