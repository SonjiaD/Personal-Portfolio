// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import styles from './Navbar.module.css'; // Ensure you are using CSS modules

// const Navbar = () => {
//     return (
//         <nav className={styles.nav}>
//             <ul className={styles.ul}>
//                 <li className={styles.li}>
//                     <Link to="/" className={styles.link}>Home</Link> {/* Update to Link */}
//                 </li>
//                 <li className={styles.li}>
//                     <Link to="/projects" className={styles.link}>Projects</Link> {/* Update to Link */}
//                 </li>
//                 <li className={styles.li}>
//                     <Link to="/skills" className={styles.link}>Skills</Link> {/* Update to Link */}
//                 </li>
//                 {/* <li className={styles.li}>
//                     <Link to="/contact" className={styles.link}>Contact</Link> 
//                 </li> */}
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

// src/components/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css'; // Make sure to import as a module

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <a href="#hero" className={styles.link}>Home</a>
                </li>
                <li className={styles.li}>
                    <a href="#projects" className={styles.link}>Projects</a>
                </li>
                <li className={styles.li}>
                    <a href="#skills" className={styles.link}>Skills</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;



