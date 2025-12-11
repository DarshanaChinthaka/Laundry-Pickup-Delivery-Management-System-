import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// --- Function to Inject CSS Styles ---
// This function places all the necessary CSS for the layout, hover effects,
// and media queries directly into the document's head, fulfilling the
// requirement of having all code within the single JS file.
const injectStyles = () => {
    const styleId = 'laundry-login-styles';
    if (document.getElementById(styleId)) return; // Prevent duplicate injection

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
        /* General Reset and Body Styles */
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f7f9;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        /* --- Main Container Layout (Two Panels) --- */
        .login-container {
            display: flex;
            width: 900px;
            height: 550px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
        }

        /* --- Left Panel: Visual/Marketing Side --- */
        .login-visual-panel {
            flex: 1;
            background-color: #3b5998; /* Dark Blue from the image */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            padding: 20px;
        }

        .laundry-system-illustration {
            text-align: center;
        }

        .laundry-system-illustration h1 {
            font-size: 24px;
            margin-bottom: 5px;
        }

        /* --- Right Panel: Form Side --- */
        .login-form-panel {
            flex: 1;
            background-color: white;
            padding: 30px 40px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            /* Subtle background pattern mimic */
            background-image: radial-gradient(#f4f4f4 1px, transparent 0);
            background-size: 20px 20px;
        }

        /* Close Button */
        .close-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #999;
        }

        /* Logo Section */
        .logo-section h2 {
            font-size: 20px;
            color: #3b5998;
            margin: 0;
        }

        .separator-line {
            width: 80%;
            height: 1px;
            background-color: #ddd;
            margin: 10px 0 20px 0;
        }

        /* Form Styling */
        .login-form {
            width: 100%;
            max-width: 300px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .login-form input {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 14px;
            outline: none;
        }

        .login-form input:focus {
            border-color: #3b5998;
        }

        /* Password field with eye icon */
        .password-wrapper {
            position: relative;
            width: 100%;
        }

        .password-toggle {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            color: #aaa;
        }

        /* Options (Remember Me / Forgot Password) */
        .form-options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            font-size: 13px;
            width: 100%;
        }

        .forgot-password-link {
            color: #3b5998;
            text-decoration: none;
            font-weight: bold;
        }

        .forgot-password-link:hover {
            text-decoration: underline;
        }

        /* Checkbox Styling (Custom Look) */
        .checkbox-container {
            display: block;
            position: relative;
            padding-left: 25px;
            cursor: pointer;
            user-select: none;
            text-align: left;
            color: #555;
        }

        .checkbox-container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 15px;
            width: 15px;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 3px;
        }

        .checkbox-container input:checked ~ .checkmark {
            background-color: #3b5998;
            border-color: #3b5998;
        }

        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }

        .checkbox-container input:checked ~ .checkmark:after {
            display: block;
        }

        .checkbox-container .checkmark:after {
            left: 4px;
            top: 1px;
            width: 4px;
            height: 8px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }

        /* Login Button */
        .login-btn {
            width: 100%;
            padding: 12px;
            background-color: #3b5998;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .login-btn:hover {
            background-color: #2c4575;
        }

        /* Help Section */
        .help-section {
            margin-top: 30px;
            font-size: 13px;
            color: #777;
            cursor: pointer;
        }

        .help-section p:hover {
            text-decoration: underline;
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 950px) {
            .login-container {
                width: 100%;
                max-width: 400px;
                height: auto;
                flex-direction: column;
            }
            .login-visual-panel {
                display: none;
            }
        }
    `;

    document.head.appendChild(style);
};


// --- React Component ---
const LoginPage = () => {
    // Inject styles when the component mounts
    useEffect(() => {
        injectStyles();
    }, []);

    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const selectedRole = params.get('role') || '';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [role, setRole] = useState(selectedRole || '');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the role-aware login handler which performs validation and navigation
        handleLogin();
    };

    const handleClose = () => {
        console.log('Close button clicked - Navigate away.');
    };

    const handleLogin = () => {
        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }

        const normalized = username.trim().toLowerCase();

        // Prefer role passed via query param; otherwise use selected role
        const roleToUse = selectedRole || role;
        if (roleToUse) {
            setError('');
            if (roleToUse === 'admin') { navigate('/admin'); return; }
            if (roleToUse === 'customer') { navigate('/customer'); return; }
            if (roleToUse === 'driver') { navigate('/driver'); return; }
            if (roleToUse === 'employee') { navigate('/employee'); return; }
        }

        // Fallback demo logic: email-based
        if (normalized === 'laundry@gmail.com') { setError(''); navigate('/admin'); return; }
        if (normalized.endsWith('@gmail.com')) { setError(''); navigate('/customer'); return; }

        setError('Invalid credentials. Use @gmail.com emails for customers or laundry@gmail.com for admin.');
    };

    return (
        <div className="login-container">

            {/* --- Left Side: Product Illustration (Visual Panel) --- */}
            <div className="login-visual-panel">
                <div className="laundry-system-illustration">
                    <h1>Smart Laundry Management</h1>
                    <p>Track your linens, optimize your workflow.</p>
                    {/* Placeholder for the laundry cart/dashboard image assets */}
                </div>
            </div>

            {/* --- Right Side: Login Form Panel --- */}
            <div className="login-form-panel">

                <button className="close-btn" onClick={handleClose}>×</button>

                <div className="logo-section" style={{ marginBottom: '20px' }}>
                    <div className="laundry-logo" style={{ fontSize: '40px', color: '#3b5998', marginBottom: '5px' }}>🧺</div>
                    <h2>LaundryFlow Pro</h2>
                    <p className="tagline" style={{ fontSize: '12px', color: '#777', marginTop: '5px' }}>Smart Laundry Management</p>
                </div>

                <div className="separator-line"></div>

                <h3 style={{ fontSize: '18px', color: '#333', marginBottom: '25px' }}>Login to your Account</h3>

                <form onSubmit={handleSubmit} className="login-form">
                    {/* Username Input */}
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="form-group">
                        <div className="password-wrapper">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span className="password-toggle">👁</span>
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password Links */}
                    <div className="form-options">
                        <label className="checkbox-container">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <span className="checkmark"></span>
                            Remember me
                        </label>
                        <a href="#forgot" className="forgot-password-link">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Role Selection (if no role query param) - plain select to avoid extra imports */}
                    {!selectedRole && (
                        <div style={{ width: '100%', maxWidth: 300, margin: '16px auto 8px' }}>
                            <label style={{ display: 'block', marginBottom: 6, color: '#555' }}>Select role (demo)</label>
                            <select value={role} onChange={(e) => setRole(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: 4 }}>
                                <option value="">-- choose role --</option>
                                <option value="customer">Customer</option>
                                <option value="driver">Driver</option>
                                <option value="employee">Employee</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                    )}

                    {/* Error Message Display */}
                    {error && (
                        <div style={{ width: '100%', maxWidth: 300, margin: '8px auto', background: '#ffebee', color: '#c62828', padding: '10px', borderRadius: 6 }}>
                            {error}
                        </div>
                    )}

                    {/* Login Button */}
                    <button type="submit" className="login-btn">
                        LOGIN
                    </button>
                </form>

                {/* Need Help Section */}
                <div className="help-section">
                    <p>Need Help Signing In?</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;