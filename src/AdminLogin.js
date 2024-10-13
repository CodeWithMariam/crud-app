import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const adminEmail = 'admin@example.com';
        const adminPassword = 'password123';

        if (email === adminEmail && password === adminPassword) {
            console.log('Login successful!');
            navigate('/employees');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="container1">
            <div className="admin">
                <h2 className='head'>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};

export default AdminLogin;
