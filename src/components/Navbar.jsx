import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="logo-cs">CS</span> — Ticket System
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
                <a href="#">Home</a>
                <a href="#">FAQ</a>
                <a href="#">Changelog</a>
                <a href="#">Blog</a>
                <a href="#">Download</a>
                <a href="#">Contact</a>
                <button className="new-ticket-btn">+ New Ticket</button>
            </div>
        </nav>
    );
};

export default Navbar;