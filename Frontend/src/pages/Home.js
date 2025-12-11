import React, { useState, useEffect } from 'react';

// --- I. CSS STYLES INJECTION FUNCTION ---
// Contains the CSS for the Hero and Features sections (Footer styles are kept but unused in the final component list).
const injectStyles = () => {
    const styleId = 'laundry-partial-page-styles';
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
        .yellow-btn {
            background-color: #ffc107;
            color: #333;
            border: none;
            padding: 12px 30px;
            font-weight: bold;
            border-radius: 4px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: background-color 0.3s;
        }
        .yellow-btn:hover { background-color: #f0b400; }
        .blue-btn {
            background-color: #3b5998;
            color: white;
            border: 1px solid #3b5998;
            padding: 12px 30px;
            font-weight: bold;
            border-radius: 4px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: background-color 0.3s;
        }
        .blue-btn:hover { background-color: #2c4575; }

        /* === II. HERO SECTION STYLES (Blue Background) === */
        .hero-section {
            background-color: #1a237e; /* Dark Blue from one image */
            color: white;
            padding: 80px 5%;
            display: flex;
            justify-content: center;
        }
        .hero-content {
            display: flex;
            gap: 50px;
            align-items: center;
            max-width: 1200px;
            width: 100%;
        }
        .hero-text {
            flex: 1;
        }
        .hero-text h1 {
            font-size: 50px;
            margin: 10px 0;
            line-height: 1.1;
        }
        .hero-text .subtitle {
            font-size: 16px;
            opacity: 0.8;
            max-width: 500px;
            margin-bottom: 30px;
        }
        .hero-actions {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
        .hero-image-placeholder {
            flex: 1;
            min-height: 300px;
            background-color: #2c4575; /* Placeholder color for truck/dashboard image */
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 18px;
        }

        /* === III. FEATURES SECTION STYLES === */
        .features-section {
            text-align: center;
            background-color: #f4f7f9;
        }
        .features-header {
            max-width: 800px;
            margin: 0 auto 50px auto;
        }
        .features-header h2 {
            font-size: 32px;
            color: #333;
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }
        .feature-card {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s;
        }
        .feature-card:hover {
            transform: translateY(-5px);
        }
        .feature-icon-wrapper {
            width: 60px;
            height: 60px;
            border-radius: 12px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            margin-bottom: 15px;
        }
        /* Specific Icon colors from images */
        .icon-green { background-color: #d8f5e2; color: #4caf50; }
        .icon-teal { background-color: #e0f7fa; color: #00bcd4; }
        .icon-purple { background-color: #ede7f6; color: #673ab7; }
        .icon-orange { background-color: #ffe0b2; color: #ff9800; }
        .icon-gray { background-color: #f5f5f5; color: #9e9e9e; }
        .feature-card p {
            font-size: 14px;
            color: #555;
            line-height: 1.4;
        }

        /* === V. FOOTER SECTION STYLES (Kept but unused) === */
        .footer-section {
            background-color: #1a237e;
            color: white;
            padding: 50px 0;
        }
        .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1.5fr;
            display: grid;
            gap: 40px;
        }
        .footer-logo-text h4 {
            font-size: 24px;
            color: #ffc107;
            margin-top: 0;
            margin-bottom: 5px;
        }
        .footer-logo-text p {
            font-size: 12px;
            opacity: 0.7;
            line-height: 1.5;
            margin-bottom: 20px;
        }
        .footer-links h4 {
            font-size: 18px;
            margin-top: 0;
            margin-bottom: 20px;
        }
        .footer-links ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .footer-links ul li {
            margin-bottom: 8px;
            font-size: 14px;
        }
        .footer-links ul li a {
            color: white;
            text-decoration: none;
            opacity: 0.8;
            transition: opacity 0.3s;
        }
        .footer-links ul li a:hover {
            opacity: 1;
        }
        .footer-socials a {
            color: white;
            font-size: 20px;
            margin-right: 15px;
            text-decoration: none;
            display: inline-flex;
            width: 30px;
            height: 30px;
            border: 1px solid white;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
        }

        /* Media Queries (Responsive adjustments for smaller screens) */
        @media (max-width: 950px) {
            .hero-content {
                flex-direction: column;
                text-align: center;
            }
            .hero-actions {
                justify-content: center;
            }
            .footer-grid {
                grid-template-columns: 1fr 1fr;
                gap: 30px;
            }
        }
        @media (max-width: 600px) {
            .footer-grid {
                grid-template-columns: 1fr;
            }
        }
    `;

    document.head.appendChild(style);
};


// --- II. REACT COMPONENTS ---

// 1. Hero Section Component (Combined)
const HeroSection = () => {
    return (
        <div className="hero-section" id="home">
            <div className="hero-content">
                <div className="hero-text">
                    <p style={{ color: '#00cc66', fontWeight: 'bold', margin: '0 0 5px 0' }}>INDUSTRY-LEADING SOLUTION</p>
                    <h1 style={{ color: 'white' }}>
                         laundry Pickup & Delivery Management System
                    </h1>
                    <p className="subtitle">
                        Automate inefficient commercial laundry processes, reduce costs, eliminate inefficiencies, and improve tracking. See how it can make a difference for your commercial laundry.
                    </p>
                    <div className="hero-actions">
                        <a href="#demo" className="yellow-btn">SCHEDULE A DEMO</a>
                        <a href="#contact" className="blue-btn" style={{ backgroundColor: 'transparent', border: '1px solid white' }}>CONTACT US</a>
                    </div>
                </div>
                <div className="hero-image-placeholder">
                    {/* Placeholder for complex image asset (Truck, building, dashboard) */}
                    Laundry Dashboard & Truck Illustration
                </div>
            </div>
        </div>
    );
};

// 2. Features Section Component
const FeaturesSection = () => {
    const features = [
        { icon: '🚚', title: 'Linen Tracking Shipping And Receiving', color: 'gray' },
        { icon: '🛣️', title: 'Route Management & Optimization', color: 'green' },
        { icon: '📝', title: 'Linen Rentals Orders Management', color: 'purple' },
        { icon: '🧾', title: 'Billing, Invoicing & Other Financials', color: 'teal' },
        { icon: '🏷️', title: 'RFID', color: 'green' },
        { icon: '🖥️', title: 'Laundry Customer Portal', color: 'orange' },
        { icon: '🔄', title: 'Rewash, Rejects, Reclaim & Discard Tracking', color: 'teal' },
        { icon: '📊', title: 'Productivity & Labor Cost Tracking', color: 'gray' },
        { icon: '🗓️', title: 'Production Scheduling & Tracking', color: 'purple' },
    ];

    return (
        <div className="features-section section">
            <div className="container">
                <div className="features-header">
                    <p style={{ color: '#ffc107', fontWeight: 'bold' }}>FEATURES</p>
                    <h2>Explore the Transformative Power of LinenTech</h2>
                    <p style={{ fontSize: '16px', color: '#555' }}>
                        An all-in-one software delivering complete control over every aspect of your Commercial Laundry. Explore our full suite of features to grasp the power and scope of LinenTech.
                    </p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className={`feature-icon-wrapper icon-${feature.color}`}>
                                {feature.icon}
                            </div>
                            <p style={{ fontWeight: 'bold', margin: '0' }}>{feature.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// 3. Footer Section Component (REMOVED: The definition is commented out)
/*
const FooterSection = () => {
    // ... footer content
};
*/

// 4. Main Page Component
const LaundryHomePage = () => {
    // Inject the combined styles when the main component mounts
    useEffect(() => {
        injectStyles();
    }, []);

    return (
        <div id="laundry-management-page">
            {/* NavBar REMOVED */}
            <HeroSection />
            <FeaturesSection />
            {/* ContactSection REMOVED */}
            {/* FooterSection REMOVED */}
        </div>
    );
};

export default LaundryHomePage;