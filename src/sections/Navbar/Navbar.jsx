// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Navbar.module.css'; // Make sure to import as a module

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link to="/" className={styles.link}>Home</Link> {/* Use Link for navigation */}
                </li>
                <li className={styles.li}>
                    <Link to="/projects" className={styles.link}>Code</Link> {/* Use Link for navigation */}
                </li>
                <li className={styles.li}>
                    <Link to="/designs" className={styles.link}>Designs</Link> {/* Use Link for navigation */}
                </li>
                <li className={styles.li}>
                    <Link to="/skills" className={styles.link}>Skills</Link> {/* Use Link for navigation */}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
