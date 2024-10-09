import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // Simple validation
        if (username.length < 3) {
            setError("Username must be at least 3 characters.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Simulate user registration (this is just a demo, you might want to use localStorage or API calls)
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        setError(""); // Clear any previous errors
        navigate("/login"); // Redirect to login after successful sign up
    };

    return (
        <div className="bg-secondary vh-100 d-flex justify-content-center align-items-center">
            <div className="bg-dark card border-danger shadow-lg rounded-4" style={{ width: "400px" }}>
                <div className="card-body">
                    <h2 className="card-title text-center text-danger">Sign Up</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSignUp}>
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
                        <div className="mb-3">
                            <label className="form-label text-white">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-danger w-100">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
