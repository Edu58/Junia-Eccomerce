import './HomeBanner.scss'
import Categories from '../Categories';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbTruckReturn } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";


const HomeBanner = ({ categories, banner }) => {

    let iconStyles = { color: "#f09116", fontSize: "2.5rem" };

    return (

        <div className='bannerDiv container pt-4'>
            <Categories categories={categories} />
            <div className="banner card">
                <div className="card-body">
                    {banner ? <img src={banner.image} className='rounded img-fluid' /> : ''}
                </div>
            </div>
            <div className="help-center">
                <div className='card'>
                    <div className="card-body">
                        <div className="help mb-3 d-flex align-items-center">
                            <AiOutlineQuestionCircle style={iconStyles} />
                            <div className='ms-2'>
                                <span className='fw-bold'>Help Center</span>
                                <br />
                                <small>Guide to customer care</small>
                            </div>
                        </div>
                        <div className="return mb-3 d-flex align-items-center">
                            <TbTruckReturn style={iconStyles} />
                            <div className='ms-2'>
                                <span className='fw-bold'>Easy Return</span>
                                <br />
                                <small>Quick Refund</small>
                            </div>
                        </div>
                        <div className="sell d-flex align-items-center">
                            <GiTakeMyMoney style={iconStyles} />
                            <div className='ms-2'>
                                <span className='fw-bold'>Sell on Jumia</span>
                                <br />
                                <small>Millions of Customers</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidebar-img card mt-4">
                    <div className="card-body">
                        {banner ? <img src={banner.image} className='rounded img-fluid' /> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner