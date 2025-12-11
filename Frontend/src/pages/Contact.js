import React, { useState, useEffect } from 'react';

// --- I. CSS STYLES INJECTION FUNCTION ---
// Contains all the CSS for the Login, Contact, and Footer sections.
const injectStyles = () => {
    const styleId = 'laundry-full-page-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
        /* === GLOBAL STYLES & LAYOUT === */
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f7f9;
        }
        .section {
            padding: 50px 0;
        }
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
        }

        /* === I. LOGIN SECTION STYLES (Kept for CSS dependency, but LoginSection is not rendered) === */
        .login-section {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f4f7f9;
            /* Added margin-top to separate contact form from top of viewport */
            margin-top: 50px;
        }
        .login-container {
            display: flex;
            width: 900px;
            height: 550px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
        }
        .login-visual-panel {
            flex: 1;
            background-color: #3b5998; /* Dark Blue */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            padding: 20px;
        }
        .login-form-panel {
            flex: 1;
            background-color: white;
            padding: 30px 40px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            background-image: radial-gradient(#f4f4f4 1px, transparent 0);
            background-size: 20px 20px;
        }
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
        .login-form {
            width: 100%;
            max-width: 300px;
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
        .password-wrapper { position: relative; }
        .password-toggle {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            color: #aaa;
        }
        .form-options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            font-size: 13px;
        }
        .forgot-password-link {
            color: #3b5998;
            text-decoration: none;
            font-weight: bold;
        }
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
        }
        .login-btn:hover { background-color: #2c4575; }
        /* Custom Checkbox styles omitted for brevity but required for full fidelity */

        /* === II. CONTACT SECTION STYLES (Full Blue Background) === */
        .contact-section {
            background-color: #3b5998; /* Main Blue Color */
            color: white;
            padding: 80px 0;
        }
        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }
        .contact-header h1 {
            font-size: 36px;
            margin-top: 5px;
        }
        .contact-header p {
            opacity: 0.8;
            max-width: 400px;
        }
        .form-column {
            background-color: #5575b5; /* Slightly lighter blue for form background */
            padding: 40px;
            border-radius: 8px;
        }
        .form-row {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
        }
        .form-input-full, .form-row > div {
            flex: 1;
        }
        .form-input-full input, .form-row input, .form-column textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #3b5998;
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 16px;
            color: #333; /* Ensure input text is dark */
        }
        .form-column textarea {
            min-height: 120px;
            resize: vertical;
        }
        .phone-group {
            display: flex;
        }
        .phone-group .country-code {
            width: 100px;
            background-color: #f0f0f0;
            margin-right: 10px;
            border-right: none;
            cursor: default;
        }
        .submit-btn {
            background-color: #ffc107; /* Yellow/Orange */
            color: #333;
            border: none;
            padding: 12px 30px;
            font-weight: bold;
            border-radius: 4px;
            cursor: pointer;
        }
        .contact-details-column h3 {
            border-left: 3px solid #ffc107;
            padding-left: 10px;
            margin-top: 30px;
        }
        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            font-size: 14px;
        }
        .contact-item span {
            margin-right: 10px;
            color: #ffc107; /* Icon color */
        }
        .math-captcha {
            display: flex;
            gap: 10px;
            align-items: center;
            margin-top: 20px;
        }
        .math-captcha input {
            width: 150px;
        }

        /* === III. FOOTER SECTION STYLES (Dark Background) === */
        .footer-section {
            background-color: #1a237e; /* Very dark blue for footer */
            color: white;
            padding: 50px 0;
        }
        .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 2fr; /* Layout based on image */
            gap: 40px;
        }
        .footer-logo-text h4 {
            font-size: 18px;
            margin-top: 0;
        }
        .footer-logo-text p {
            font-size: 12px;
            opacity: 0.7;
        }
        .footer-links ul {
            list-style: none;
            padding: 0;
        }
        .footer-links ul li {
            margin-bottom: 8px;
            font-size: 14px;
        }
        .footer-links ul li a {
            color: white;
            text-decoration: none;
            opacity: 0.8;
        }
        .footer-socials a {
            color: white;
            font-size: 20px;
            margin-right: 15px;
            text-decoration: none;
        }

        /* Media Queries (Responsive adjustments for smaller screens) */
        @media (max-width: 950px) {
            .login-container { width: 100%; max-width: 400px; height: auto; flex-direction: column; }
            .login-visual-panel { display: none; }
            .contact-grid { grid-template-columns: 1fr; }
            .footer-grid { grid-template-columns: 1fr; }
        }
    `;

    document.head.appendChild(style);
};

// 1. Login Section Component (REMOVED FROM RENDERING)
// *Note: This component is left here but is not called in the Main Component.*
/*
const LoginSection = () => {
    // ... Login logic and JSX here
};
*/

// 2. Contact Section Component (from images 3, 4, 5)
const ContactSection = () => {
    const [captchaResult, setCaptchaResult] = useState('');
    // State for form inputs (optional, simplified here)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [agreed, setAgreed] = useState(false);

    const captchaProblem = '6 + 3';
    const captchaAnswer = 9;

    const handleContactSubmit = (e) => {
        e.preventDefault();

        // Basic Form Validation & CAPTCHA Check
        if (parseInt(captchaResult) === captchaAnswer && agreed) {
            console.log('Contact Form Submission:', { firstName, lastName, email, phone, message, agreed });
            alert('Form submitted successfully! (Check console for data)');
            // Reset form (optional)
            setFirstName(''); setLastName(''); setEmail(''); setPhone(''); setMessage(''); setAgreed(false); setCaptchaResult('');
        } else if (!agreed) {
            alert('Please agree to the Privacy Policy.');
        } else {
            alert('Incorrect CAPTCHA answer. Please try again.');
        }
    };

    return (
        <div className="contact-section">
            <div className="container">
                <div className="contact-grid">
                    {/* Left Column: Header and Chat Illustration */}
                    <div className="contact-header">
                        <p style={{ color: '#ffc107', fontWeight: 'bold' }}>CONTACT US</p>
                        <h1>LET'S HAVE A CHAT</h1>
                        <p>Whether it's an important query, a specific feature or discovering how LinenTech can transform your operations, we're always available.</p>
                        {/* Placeholder for the chat diagram/illustration  */}
                    </div>

                    {/* Right Column: Contact Form and Details */}
                    <div>
                        <div className="form-column">
                            <form onSubmit={handleContactSubmit}>
                                <h3 style={{marginTop: 0}}>LET'S CONNECT</h3>
                                <div className="form-row">
                                    <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                    <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                </div>
                                <div className="form-input-full" style={{ marginBottom: '20px' }}>
                                    <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="form-input-full" style={{ marginBottom: '20px' }}>
                                    <div className="phone-group">
                                        <input type="text" className="country-code" value="LK (+94)" readOnly />
                                        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="form-input-full" style={{ marginBottom: '20px' }}>
                                    <textarea placeholder="Write your message here..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>

                                <div style={{ marginBottom: '15px', fontSize: '14px', textAlign: 'left' }}>
                                    <label>
                                        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required /> You agree to our friendly <a href="#privacy" style={{ color: '#ffc107' }}>Privacy Policy.</a>
                                    </label>
                                </div>

                                <div className="math-captcha">
                                    <p>Please solve the following: **{captchaProblem}**</p>
                                    <input
                                        type="text"
                                        placeholder="Solve the math function"
                                        value={captchaResult}
                                        onChange={(e) => setCaptchaResult(e.target.value)}
                                        required
                                    />
                                </div>

                                <button type="submit" className="submit-btn" style={{ marginTop: '20px' }}>SUBMIT</button>
                            </form>
                        </div>

                        <div className="contact-details-column">
                            <h3>CONTACT</h3>
                            {/* US Head Office */}
                            <p style={{ fontWeight: 'bold' }}>US Head Office:</p>
                            <div className="contact-item"><span>📍</span> 5555 Glenridge Connector, Suite 200, Atlanta, GA 30342</div>
                            <div className="contact-item"><span>📱</span> (+1) 404-845-9968</div>

                            {/* Asia Head Office */}
                            <p style={{ fontWeight: 'bold', marginTop: '20px' }}>Asia Head Office:</p>
                            <div className="contact-item"><span>📍</span> Meydan Racecourse Al Meydan Road, Nad Al Sheba - Dubai</div>
                            <div className="contact-item"><span>📱</span> (971) 52 2593559</div>

                            {/* United Kingdom */}
                            <p style={{ fontWeight: 'bold', marginTop: '20px' }}>United Kingdom:</p>
                            <div className="contact-item"><span>📱</span> (020) 7993-6583</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 3. Footer Section Component (from image 2)
const FooterSection = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    {/* Column 1: Logo and Description */}
                    <div className="footer-logo-text">
                        <h4 style={{ color: '#ffc107' }}>LinenTech</h4>
                        <p>LinenTech is a leading commercial laundry management software made possible through unwavering dedication, planning and expertise by the brightest laundry minds in the world. With every feature carefully designed keep laundry managers' ease and comfort at the forefront, we're proud to have successfully delivered the most comprehensive laundry automation solution available for use today.</p>
                        <div className="footer-socials">
                            <a href="#facebook">f</a>
                            <a href="#instagram">i</a>
                            <a href="#linkedin">in</a>
                        </div>
                    </div>

                    {/* Column 2: Site Map */}
                    <div className="footer-links">
                        <h4>Site Map</h4>
                        <ul>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#case-study">Case Study</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#blog">Blog</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Information */}
                    <div className="footer-links">
                        <h4>Information</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#terms">Terms & Conditions</a></li>
                            <li><a href="#hardware">Hardware Requirements</a></li>
                        </ul>
                    </div>

                    {/* Column 4: US Regional & ISO Badge */}
                    <div className="footer-links">
                        <p style={{ fontWeight: 'bold' }}>US Regional Office:</p>
                        <div style={{ fontSize: '12px' }}>1601 Oak St, Suite # 308, Myrtle Beach, SC 29577</div>
                        <div style={{ fontSize: '12px' }}>+1 (843) 788-9298</div>

                        {/* Placeholder for ISO badge image */}
                        <div style={{ marginTop: '20px', border: '1px solid white', padding: '5px', width: '100px', textAlign: 'center' }}>
                            <p style={{ fontSize: '10px', margin: 0 }}>ISO Certified Badge</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 4. Main Page Component
const LaundryContactPage = () => {
    // Inject the combined styles when the main component mounts
    useEffect(() => {
        injectStyles();
    }, []);

    return (
        <div id="laundry-management-page">
            {/* The LoginSection component has been removed from this return block. */}

            <ContactSection />

            <FooterSection />
        </div>
    );
};

export default LaundryContactPage;