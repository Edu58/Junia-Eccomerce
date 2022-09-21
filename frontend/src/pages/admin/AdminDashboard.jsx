import './AdminDashboard.scss'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useContext, useEffect } from 'react'
import ProductsContext from '../../context/products'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

const AdminDashboard = () => {
    const { cartDispatch } = useContext(ProductsContext)
    const [sidebar, setSidebar] = useState(false)
    const [totals, setTotals] = useState({ users: 0, categories: 0, orders: 0, products: 0 })

    const axiosPrivate = useAxiosPrivate()

    const showMenu = () => {
        const sidebar = document.getElementById("sidebar")
        sidebar.classList.toggle('show')
    }
    const handleLogout = () => {
        cartDispatch({
            type: "USER_LOGOUT"
        })
    }

    const getTotals = async () => {
        const {data} = await axiosPrivate.get('/admin/totals')
        setTotals({ ...data })
    }

    useEffect(() => {

        getTotals()
    }, [totals])

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
                    <div className="my-2">
                        <i className='bx bx-home-alt-2 fs-4'></i>
                        <Link to="/" className='text-decoration-none'>
                            <span className="fw-bold">Home</span>
                        </Link>
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
                                    <p className="number">{totals.users}</p>
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
                                    <p className="number">{totals.categories}</p>
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
                                    <p className="number">{totals.products}</p>
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
                                    <p className="number">{totals.orders}</p>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Jane Doe</td>
                                <td>Customer</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Jane Doe</td>
                                <td>Customer</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Jane Doe</td>
                                <td>Customer</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Jane Doe</td>
                                <td>Customer</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Jane Doe</td>
                                <td>Customer</td>
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