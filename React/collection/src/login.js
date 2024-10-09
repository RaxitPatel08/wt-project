import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Simulate user login from localStorage
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            setError("");
            setIsAuthenticated(true);
            navigate("/home"); // Redirect to home after successful login
        } else {
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="bg-secondary vh-100 d-flex justify-content-center align-items-center">
            <div className="bg-dark card border-danger shadow-lg rounded-4" style={{ width: "400px" }}>
                <div className="card-body">
                    <h2 className="card-title text-center text-danger">Login</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label text-white">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-danger w-100">Login</button>
                        <p className="text-center text-white mt-3">
                        Don't have an account? <Link to="/signup" className="text-danger">Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default Login;
