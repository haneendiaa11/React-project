import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navItems = ['Home', 'About', 'Contact', 'Features', 'Products'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>React</h2>


      <div className={open ? 'links show' : 'links'}>
        {navItems.map((item) => (
          <Link
            key={item}
            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}
