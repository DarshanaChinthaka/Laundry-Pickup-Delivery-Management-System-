import React, { useEffect } from 'react';

// --- I. CSS STYLES INJECTION FUNCTION (FOOTER ONLY) ---
const injectFooterStyles = () => {
    const styleId = 'laundry-footer-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
        /* === GLOBAL FOOTER LAYOUT === */
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
        }

        /* === FOOTER SECTION STYLES (Dark Background) === */
        .footer-section {
            background-color: #1a237e; /* Very dark blue from image */
            color: white;
            padding: 50px 0;
        }
        .footer-grid {
            display: grid;
            /* Layout based on the image: 2fr (logo) 1fr (map) 1fr (info) 2fr (contact details) */
            grid-template-columns: 2fr 1fr 1fr 2fr;
            gap: 40px;
        }

        /* --- Column Headings --- */
        .footer-grid h4 {
            font-size: 18px;
            margin-top: 0;
            margin-bottom: 20px;
        }
        .footer-logo-text h4 {
             color: #ffc107; /* Yellow color for the Logo/Name */
             font-size: 24px;
        }

        /* --- Logo Column --- */
        .footer-logo-text p {
            font-size: 12px;
            opacity: 0.7;
            line-height: 1.5;
            margin-bottom: 20px;
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
            transition: background-color 0.3s;
        }
        .footer-socials a:hover {
            background-color: #3b5998;
        }

        /* --- Link Columns (Site Map & Information) --- */
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
            text-decoration: underline;
        }

        /* --- Contact Details Column --- */
        .contact-details p {
            font-weight: bold;
            color: #ffc107; /* Orange/Yellow for subtitles like "US Head Office" */
            margin-top: 20px;
            margin-bottom: 5px;
        }
        .contact-details-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 8px;
            font-size: 14px;
            line-height: 1.3;
        }
        .contact-details-item span {
            margin-right: 10px;
            color: #fff; /* Icon color, keeping it white for contrast */
            font-size: 16px;
            padding-top: 2px;
        }
        .iso-badge-placeholder {
            margin-top: 25px;
            border: 1px solid white;
            padding: 10px;
            width: 120px;
            text-align: center;
            font-size: 10px;
            background-color: #2c4575;
            border-radius: 4px;
        }

        /* Media Queries */
        @media (max-width: 950px) {
            .footer-grid {
                grid-template-columns: 1fr 1fr; /* Two columns on tablets */
                gap: 30px;
            }
        }
        @media (max-width: 600px) {
            .footer-grid {
                grid-template-columns: 1fr; /* Single column on phones */
            }
        }
    `;

    document.head.appendChild(style);
};


// --- II. REACT COMPONENT ---

const FooterSection = () => {
    // Inject the footer styles when the component mounts
    useEffect(() => {
        injectFooterStyles();
    }, []);

    return (
        <div className="footer-section">
            <div className="container">
                <div className="footer-grid">

                    {/* Column 1: Logo and Description */}
                    <div className="footer-logo-text">
                        <h4 style={{ color: '#ffc107', margin: 0 }}>
                            LinenTech
                            <span style={{ display: 'block', fontSize: '10px', fontWeight: 'normal', opacity: 0.8 }}>
                                Laundry Management Made Simple
                            </span>
                        </h4>
                        <p>
                            LinenTech is a leading commercial laundry management software made possible through unwavering dedication, planning and expertise by the brightest laundry minds in the world. With every feature carefully designed keep laundry managers' ease and comfort at the forefront, we're proud to have successfully delivered the most comprehensive laundry automation solution available for use today.
                        </p>
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
                            <li><a href="#refund">Refund And Cancellation</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Details (US Head, US Regional, Asia Head) */}
                    <div className="contact-details">
                        <h4>Contact Details</h4>

                        <p>US Head Office:</p>
                        <div className="contact-details-item"><span>📍</span> 5555 Glenridge Connector, Suite 200, Atlanta, GA 30342</div>
                        <div className="contact-details-item"><span>📱</span> (+1) 404-845-9968</div>

                        <p>US Regional Office:</p>
                        <div className="contact-details-item"><span>📍</span> 1601 Oak St, Suite # 308, Myrtle Beach, SC 29577</div>
                        <div className="contact-details-item"><span>📱</span> +1 (843) 788-9298</div>

                        <p>Asia Head Office:</p>
                        <div className="contact-details-item"><span>📍</span> The Meydan Hotel, Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E</div>
                        {/* Note: The image shows a UK number next to the Asia office, maintaining the original structure of the combined contact block */}

                        <div className="iso-badge-placeholder">
                            ISO Certified                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;