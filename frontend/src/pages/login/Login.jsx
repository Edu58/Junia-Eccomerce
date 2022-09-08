import './Login.scss'
import toast, { Toaster } from 'react-hot-toast';
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from 'react-router-dom'
import loginImage from '../../assets/images/login-card-image.jpg'
import { useState, useContext } from 'react'
import axiosClient from '../../components/Axios'
import ProductsContext from '../../context/products';

const Login = () => {

    const { cartState, cartDispatch } = useContext(ProductsContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axiosClient.post('auth/access',
                JSON.stringify({ email, password }),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                })

            const userInfo = jwt_decode(response.data.accessToken).userInfo

            cartDispatch({
                type: "USER_LOGIN",
                payload: userInfo
            })

            navigate('/')
        } catch (error) {
            setErrorMessage(error?.response?.data?.message)
            toast.error(`${error?.response?.data?.message}`)
        }
    }

    return (
        <>
            <Toaster />
            <div className="container login-card">
                <div className="card mx-auto">
                    <div className="fw-bold fs-4 card-header text-center text-light">Login</div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="contents">
                                <div className="login-card-image">
                                    <img src={loginImage} alt="" className='img-fluid' />
                                </div>

                                <div className="login-input-fields">
                                    <div className="mb-3">
                                        <label htmlFor="email" className='form-label'>What is your email?</label>
                                        <input type="email" name="email" id="email" className="form-control shadow-none" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className='form-label'>Enter your Password</label>
                                        <input type="password" name="password" id="password" className="form-control shadow-none" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn text-light w-50" disabled={!email || !password}>Login</button>
                            </div>
                        </form>

                        <p className='mt-4 text-center'>Don't have an account? <Link to='/signup' className="text-decoration-none">Register</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login