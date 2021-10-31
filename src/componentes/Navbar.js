import React from 'react';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="titulo">
                <h1> CACAOTECH</h1>
            </div>
            <div className="links">
                <a href="/"> Home</a>
                <a href="/create">Buy products!</a>
            </div>
        </nav>
    );
};

export default Navbar;