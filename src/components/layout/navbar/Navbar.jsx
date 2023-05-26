import CartWidget from "../../common/cartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div style={{ width: "100px", height: "auto", padding: "5px" }}>
        <img
          style={{ width: "100%", height: "100%" }}
          src="../src/assets/nevilan.logo.png"
          alt=""
        />
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>INICIO</li>
        <li className={styles.li}>PRODUCTOS</li>
        <li className={styles.li}>CONTACTO</li>
      </ul>
      <div className={styles.cartContainer}>
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
