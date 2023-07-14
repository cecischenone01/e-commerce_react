import { Link } from "react-router-dom";
import styles from "./Portada.module.css"
const Portada = () => {
  return (
    <div>
      <Link to="/products">
        <div className={styles.portadaContainer}>
          <img
            className={styles.containerImg}
            src="https://res.cloudinary.com/ddyhhrr0g/image/upload/v1685400977/lanas_1_gdnf5k.jpg"
          />
          <div className={styles.content}>
            <h3 className={styles.title}>Ver productos</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Portada