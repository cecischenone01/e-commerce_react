import { Button } from "@mui/material";
import style from "./NavItems.module.css";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div className={style.container}>
      <ul className={style.li}>
        <Link to="/products">
          <li className={style.li}>
            <Button sx={{ color: "black", fontSize: 16 }}>PRODUCTOS</Button>
          </li>
        </Link>
        <Link to="/category/lanas">
          <li className={style.li}>
            <Button sx={{ color: "black", fontSize: 16 }}>LANAS</Button>
          </li>
        </Link>
        <Link to="/category/agujas">
          <li className={style.li}>
            <Button sx={{ color: "black", fontSize: 16 }}>AGUJAS</Button>
          </li>
        </Link>
        <Link to="/category/alfileres">
          <li className={style.li}>
            <Button sx={{ color: "black", fontSize: 16 }}>ALFILERES</Button>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default NavItems