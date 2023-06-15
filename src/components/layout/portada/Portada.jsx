import { Button } from "@mui/material";
import styles from "./Portada.module.css"

const Portada = () => {
  return (
    <div className={styles.portadaContainer}>
      <h1 className={styles.title}>NUEVOS PRODUCTOS</h1>
      <Button variant="contained"color="inherit">Ver más</Button>
    </div>
  );
}

export default Portada