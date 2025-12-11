import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="nav">
      <div className="nav-container">
        <Link to="/" className="brand">LaundryPro</Link>
        <nav className="links">
          <NavLink to="/book">Book</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/admin">Admin</NavLink>
          <NavLink to="/driver">Driver</NavLink>
        </nav>
      </div>import React from 'react';
            import { Link, NavLink } from 'react-router-dom';
            import './Navbar.css';

            const Navbar = () => {
              return (
                <header className="nav">
                  <div className="nav-container">
                    {/* Added an emoji/icon for visual appeal next to the brand name */}
                    <Link to="/" className="brand">
                        <span style={{ marginRight: '8px' }} role="img" aria-label="laundry-icon">🧺</span>
                        LaundryPro
                    </Link>
                    <nav className="links">
                      <NavLink to="/book">Book</NavLink>
                      <NavLink to="/orders">Orders</NavLink>
                      <NavLink to="/admin">Admin</NavLink>
                      <NavLink to="/driver">Driver</NavLink>
                    </nav>
                  </div>
                </header>
              );
            };

            export default Navbar;
    </header>
  );
};

export default Navbar;
