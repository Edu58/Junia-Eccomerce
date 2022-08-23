import './Homepage.scss'
import HomeBanner from '../components/homepage/HomeBanner'
import ProductRows from '../components/homepage/ProductRows'
import SearchBar from '../components/homepage/SearchBar'

const Homepage = () => {
    return (
        <div className='homepage-container'>
            <SearchBar />

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