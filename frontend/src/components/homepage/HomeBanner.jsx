import './HomeBanner.scss'
import Errors from '../Errors'
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbTruckReturn } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { useContext } from 'react'
import ProductsContext from '../../context/products'
import { useEffect } from 'react'
import axiosClient from '../Axios'
import { useState } from 'react';


const HomeBanner = ({ categories, errors, banner }) => {

    let iconStyles = { color: "#f09116", fontSize: "2.5rem" };

    return (
        <>
            {errors ? <Errors type='warning' message={errors} /> : ''}

            <div className='bannerDiv container pt-4'>
                <div className="categories card p-1">
                    <div className="card-body">
                        <ul className='list-group'>
                            {
                                categories
                                    ?
                                    categories.map((category, i) => {
                                        return (
                                            <li key={i}>
                                                <a href="" className='text-decoration-none text-dark'><FiSmartphone className='me-2' />{category}</a>
                                            </li>
                                        )
                                    })
                                    :
                                    ''
                            }
                        </ul>
                    </div>
                </div>
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
        </>
    )
}

export default HomeBanner