import React, { useState } from 'react';
import userAPI from "../APIStore/userAPI.js";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { loginRequest } = userAPI();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(''); // Clear error on input change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const res = await loginRequest(formData);

        if (res.status === 'success') {
            navigate('/');
        } else {
            setError(res.message || 'Login failed. Please check your credentials.');
        }

        setLoading(false);
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div
                    className="col-md-6 d-none d-md-block d-flex align-items-center justify-content-center"
                    style={{
                        height: "100vh",
                        background: "linear-gradient(to bottom, #000000, #444444, #eeeeee)"
                    }}
                >
                    <img
                        src="/image1.svg"
                        alt="Login"
                        className="mx-auto w-100"
                    />
                </div>

                <div className="col-md-6 col-12">
                    <div>
                        <h2 className="mb-3 text-center">Login</h2>
                        <p className="text-muted text-center">Welcome back! Please enter your details to login.</p>

                        {error && (
                            <div className="alert alert-danger text-center">{error}</div>
                        )}

                        <form onSubmit={handleSubmit}>
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

                            <div className="mb-3 text-end">
                                <a href="/forget-password" className="text-decoration-none">Forgot password?</a>
                            </div>

                            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </form>

                        <div className="d-flex align-items-center my-3">
                            <hr className="flex-grow-1" />
                            <span className="px-2 text-muted">or</span>
                            <hr className="flex-grow-1" />
                        </div>

                        <p className="text-center">
                            Don’t have an account?{' '}
                            <a href="/signup" className="text-decoration-none text-black"><strong>Sign Up</strong></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
