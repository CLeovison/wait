//Start of Modules
import { Link } from "react-router-dom";
import styles from "../Navbar/navbar.module.css";
import wait from "../../../assets/Waitm.png"
//End of Modules

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className="logo">
          <Link to="/" >
          <img src={wait} alt="" className={styles.navlogo}/>
          </Link>
        </div>
        <ul className={styles.navlist}>
          <li className={styles.navitems}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navitems}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.navitems}>
            <Link to="/categories">Shop</Link>
          </li>
          <li className={styles.navitems}>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
