import { Link } from 'react-router-dom'
import './AdminDashboard.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { useContext } from 'react'
import ProductsContext from '../../context/products'

const AdminDashboard = () => {
    const { cartDispatch } = useContext(ProductsContext)
    const [sidebar, setSidebar] = useState(false)

    const showMenu = () => {
        const sidebar = document.getElementById("sidebar")
        sidebar.classList.toggle('show')
    }
    const handleLogout = () => {
        cartDispatch({
            type: "USER_LOGOUT"
        })
    }

    return (
        <div>
            <nav className="navbar py-2">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className="logo d-flex align-items-center">
                        <p>
                            <GiHamburgerMenu id='hamburger' onClick={() => setSidebar(!sidebar)} size={20} color={'white'} />
                        </p>
                        <p className='brand fw-bold fs-4 text-light'>Admin</p>
                    </div>

                    <div className="nav-links d-flex">
                        <ul className="d-flex">
                            <li className=' btn btn-sm btn-outline-danger' onClick={handleLogout}>Log out</li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="dashboard">
                <div className={`sidebar text-light pt-2 bg-dark ${sidebar ? 'show' : ''}`} id="sidebar">
                    <div className="mb-3">
                        <i className='bx bx-home-alt-2 fs-4'></i>
                        <span className="fw-bold">Home</span>
                    </div>
                    <div className="mb-3">
                        <i className='bx bx-user'></i>
                        <span>Users</span>
                    </div>
                    <div className="mb-3">
                        <i className='bx bxs-grid'></i>
                        <span>Categories</span>
                    </div>
                    <div className="mb-3">
                        <i className='bx bx-briefcase-alt'></i>
                        <span>Products</span>
                    </div>
                    <div className="mb-3">
                        <i className='bx bx-envelope'></i>
                        <span>Orders</span>
                    </div>
                </div>
                <div className="data pt-2">
                    <p className="fs-4">Dashboard</p>

                    <div className="cards">
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <p>
                                    <i className='bx bx-user'></i>
                                </p>
                                <div>
                                    <span>Total Users</span>
                                    <p className="number">15,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <p>
                                    <i className='bx bx-user'></i>
                                </p>
                                <div>
                                    <span>Total Categories</span>
                                    <p className="number">2,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <p>
                                    <i className='bx bx-edit-alt'></i>
                                </p>
                                <div>
                                    <span>Total Products</span>
                                    <p className="number">1,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <p>
                                    <i className='bx bx-briefcase-alt'></i>
                                </p>
                                <div>
                                    <span>Total Orders</span>
                                    <p className="number">5,000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Role</th>
                                <th scope="col">orders</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Jane Doe</td>
                                <td>Customer</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Jane Doe</td>
                                <td>Customer</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Jane Doe</td>
                                <td>Customer</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Jane Doe</td>
                                <td>Customer</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Jane Doe</td>
                                <td>Customer</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="pagination d-flex mt-5">
                        <a href="#">&laquo;</a>
                        <a href="#">1</a>
                        <a href="#" className="active">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">&raquo;</a>
                    </div>
                </div>
            </section>

            <footer className="bg-dark py-2">
                <div className="container">
                    <div className="bottom-div small text-light text-center">
                        <span>info@junia.com</span>
                        <br />
                        <span>All Rights Reserved &copy;2022</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default AdminDashboard