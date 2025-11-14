import {Link} from 'react-router-dom'
import './Header.css';
import { useState } from 'react';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            console.log('Searching for:', searchTerm);
            // Add search functionality here
        }
    };

    return (
        <div className="header">
            <nav className="nav-items">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
            </nav>
            
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-btn">Search</button>
            </form>
        </div>
    )
}

export default Header