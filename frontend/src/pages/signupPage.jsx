import React, { useState } from 'react';
import userAPI from '../APIStore/userAPI.js';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const { registerRequest } = userAPI();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        setLoading(true);
        const res = await registerRequest(formData);
        if (res.status === 'success') {
            setLoading(false);
            navigate('/login');
        } else {
            setLoading(false);
            setError(res.message || 'Signup failed');
        }
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div
                    className="col-md-6 d-none d-md-flex justify-content-center align-items-center"
                    style={{
                        height: '100vh',
                        background: 'linear-gradient(to bottom, #000000, #444444, #eeeeee)',
                    }}
                >
                    <img src="/image2.svg" alt="Signup" className="mx-auto w-75" />
                </div>

                <div className="col-md-6 col-12">
                    <div className="">
                        <h2 className="mb-3 text-center">Sign Up</h2>
                        <p className="text-muted text-center">
                            To create an account, please fill in the form bello.
                        </p>

                        {error && <div className="alert alert-danger">{error}</div>}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    className="form-control"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="form-control"
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                {loading ? 'Signing up...' : 'Sign Up'}
                            </button>
                        </form>

                        <div className="d-flex align-items-center my-3">
                            <hr className="flex-grow-1" />
                            <span className="px-2 text-muted">or</span>
                            <hr className="flex-grow-1" />
                        </div>

                        <p className="text-center">
                            Already have an account?{' '}
                            <a href="/login" className="text-decoration-none text-black">
                                <strong>Login</strong>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
