import './Signup.scss'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="container signup-card">
            <div className="card mx-auto">
                <div className="fw-bold fs-4 card-header text-center">Register</div>
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

                        <div className="mb-3">
                            <label htmlFor="password2" className='form-label'>Confirm Password</label>
                            <input type="password2" name="password2" id="password2" className="form-control shadow-none" placeholder="Reenter password" required />
                        </div>

                        <button type="submit" className="btn text-light">Register</button>
                    </form>

                    <p className='mt-4'>Already have an account? <Link to='/login' className="text-decoration-none">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup