import './Login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="container login-card">
            <div className="card mx-auto">
                <div className="fw-bold fs-4 card-header text-center">Login</div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="email" name="email" id="email" className="form-control shadow-none" placeholder="Enter email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className='form-label'>Password</label>
                            <input type="password" name="password" id="password" className="form-control shadow-none" placeholder="Enter password" required />
                        </div>

                        <button type="submit" className="btn text-light">Login</button>
                    </form>

                    <p className='mt-4'>Don't have an account? <Link to='/signup' className="text-decoration-none">Register</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login