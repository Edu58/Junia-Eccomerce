import './Login.scss'
import { Link } from 'react-router-dom'
import loginImage from '../../assets/images/login-card-image.jpg'
import { useState } from 'react'
import axiosClient from '../../components/Axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

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

            console.log(response.data)
        } catch (error) {
            setError(error)
            console.log(error)
        }
    }

    return (
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
    )
}

export default Login