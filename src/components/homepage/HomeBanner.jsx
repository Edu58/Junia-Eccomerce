import './HomeBanner.scss'
import banner from '../../assets/alex-unsplash.jpg'
import sidebarImg from '../../assets/Netflix-new-icon.png'
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbTruckReturn } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";


const HomeBanner = () => {

    let iconStyles = { color: "#f09116", fontSize: "2.5rem" };

    return (
        <div className='bannerDiv container mt-5'>
            <div className="categories card p-1">
                <div className="card-body">
                    <ul className='list-group'>
                        <li><FiSmartphone />Phone</li>
                        <li><FiSmartphone />Computing</li>
                        <li><FiSmartphone />Phone</li>
                        <li><FiSmartphone />Computing</li>
                        <li><FiSmartphone />Phone</li>
                        <li><FiSmartphone />Computing</li>
                        <li><FiSmartphone />Phone</li>
                        <li><FiSmartphone />Computing</li>
                        <li><FiSmartphone />Phone</li>
                        <li><FiSmartphone />Computing</li>
                        <li><FiSmartphone />Phone</li>
                        <li><FiSmartphone />Computing</li>
                    </ul>
                </div>
            </div>
            <div className="banner">
                <img src={banner} className='rounded' />
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

                <div className="sidebar-img mt-4">
                    <img src={sidebarImg} className='rounded' />
                </div>
            </div>
        </div>
    )
}

export default HomeBanner