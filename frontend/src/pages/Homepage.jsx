import './Homepage.scss'
import HomeBanner from '../components/homepage/HomeBanner'
import ProductRows from '../components/homepage/ProductRows'

const Homepage = () => {
    return (
        <div className='homepage-container'>
            <HomeBanner />

            <ProductRows categoryName="Top Selling" />

            <ProductRows categoryName="Smartphones" />

            <div className="pb-5">
                <ProductRows categoryName="Fashion" />
            </div>
        </div>
    )
}

export default Homepage