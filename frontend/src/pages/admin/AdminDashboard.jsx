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
            <nav class="navbar py-2">
                <div class="container-fluid d-flex justify-content-between align-items-center">
                    <div class="logo d-flex align-items-center">
                        <p>
                            <GiHamburgerMenu id='hamburger' onClick={() => setSidebar(!sidebar)} size={20} color={'white'} />
                        </p>
                        <p className='brand fw-bold fs-4 text-light'>Admin</p>
                    </div>

                    <div class="nav-links d-flex">
                        <ul class="d-flex">
                            <li className=' btn btn-sm btn-outline-danger' onClick={handleLogout}>Log out</li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section class="dashboard">
                <div class={`sidebar text-light pt-2 bg-dark ${sidebar ? 'show' : ''}`} id="sidebar">
                    <div class="mb-3">
                        <i class='bx bx-home-alt-2 fs-4'></i>
                        <span class="fw-bold">Home</span>
                    </div>
                    <div class="mb-3">
                        <i class='bx bx-user'></i>
                        <span>Users</span>
                    </div>
                    <div class="mb-3">
                        <i class='bx bxs-grid'></i>
                        <span>Categories</span>
                    </div>
                    <div class="mb-3">
                        <i class='bx bx-briefcase-alt'></i>
                        <span>Products</span>
                    </div>
                    <div class="mb-3">
                        <i class='bx bx-envelope'></i>
                        <span>Orders</span>
                    </div>
                </div>
                <div class="data pt-2">
                    <p class="fs-4">Dashboard</p>

                    <div class="cards">
                        <div class="card">
                            <div class="card-body d-flex align-items-center">
                                <p>
                                    <i class='bx bx-user'></i>
                                </p>
                                <div>
                                    <span>Total Users</span>
                                    <p class="number">15,000</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body d-flex align-items-center">
                                <p>
                                    <i class='bx bx-user'></i>
                                </p>
                                <div>
                                    <span>Total Categories</span>
                                    <p class="number">2,000</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body d-flex align-items-center">
                                <p>
                                    <i class='bx bx-edit-alt'></i>
                                </p>
                                <div>
                                    <span>Total Products</span>
                                    <p class="number">1,000</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body d-flex align-items-center">
                                <p>
                                    <i class='bx bx-briefcase-alt'></i>
                                </p>
                                <div>
                                    <span>Total Orders</span>
                                    <p class="number">5,000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <table class="table mt-4">
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

                    <div class="pagination d-flex mt-5">
                        <a href="#">&laquo;</a>
                        <a href="#">1</a>
                        <a href="#" class="active">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">&raquo;</a>
                    </div>
                </div>
            </section>

            <footer class="bg-dark py-2">
                <div class="container">
                    <div class="bottom-div small text-light text-center">
                        <span>info@junia.com</span>
                        <br />
                        <span>All Rights Reserved &copy;2022</span>
                    </div>
                </div>
            </footer>

            {/* <script>
                const menu = document.getElementById("hamburger")
                const sidebar = document.getElementById("sidebar")

                menu.addEventListener('click', function() {
                    sidebar.classList.toggle("show")
                })
            </script> */}
        </div>
    )
}

export default AdminDashboard