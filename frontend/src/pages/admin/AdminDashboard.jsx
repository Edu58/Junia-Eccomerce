import './AdminDashboard.scss'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useContext, useEffect } from 'react'
import ProductsContext from '../../context/products'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import UsersTable from './UsersTable'
import CategoriesTable from './CategoriesTable'
import ProductsTable from './ProductsTable'
import OrdersTable from './OrdersTable'

const AdminDashboard = () => {
    const { cartDispatch } = useContext(ProductsContext)
    const [sidebar, setSidebar] = useState(false)
    const [tab, setTab] = useState(1)
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
        const { data } = await axiosPrivate.get('/admin/totals')
        setTotals({ ...data })
    }

    useEffect(() => {
        getTotals()
    }, [])

    return (
        <div className='container-fluid p-0'>
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <div>
                            <GiHamburgerMenu id='hamburger' onClick={() => setSidebar(!sidebar)} size={20} color={'white'} />
                        </div>
                        <div>
                            <span className='fw-bold fs-4 text-light'>Admin</span>
                        </div>
                    </div>

                    <div className="nav-links">
                        <div>
                            <ul className="d-flex">
                                <li className=' btn btn-sm btn-outline-danger' onClick={handleLogout}>Log out</li>
                            </ul>
                        </div>
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
                    <div className="mb-3" role="button" onClick={() => setTab(1)}>
                        <i className='bx bx-user'></i>
                        <span>Users</span>
                    </div>
                    <div className="mb-3" role="button" onClick={() => setTab(2)}>
                        <i className='bx bxs-grid'></i>
                        <span>Categories</span>
                    </div>
                    <div className="mb-3" role="button" onClick={() => setTab(3)}>
                        <i className='bx bx-briefcase-alt'></i>
                        <span>Products</span>
                    </div>
                    <div className="mb-3" role="button" onClick={() => setTab(4)}>
                        <i className='bx bx-envelope'></i>
                        <span>Orders</span>
                    </div>
                </div>
                <div className="data pt-2">
                    <p className="fs-4 container-fluid">Dashboard</p>

                    <div className="cards container-fluid">
                        <div className="card shadow" onClick={() => setTab(1)} role="button">
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
                        <div className="card shadow" onClick={() => setTab(2)} role="button">
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
                        <div className="card shadow" onClick={() => setTab(3)} role="button">
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
                        <div className="card shadow" onClick={() => setTab(4)} role="button">
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

                    <div className="container-fluid">
                        {
                            tab === 1 ? <UsersTable /> : tab === 2 ? <CategoriesTable /> : tab === 3 ? <ProductsTable /> : tab === 4 ? <OrdersTable /> : ''
                        }
                    </div>

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