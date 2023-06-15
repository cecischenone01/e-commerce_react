import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

function CartIcon() {
  return (
    <div>
      <Link to="/carrito">
        <Badge badgeContent={1} color="error">
          <ShoppingCartOutlinedIcon color="action" sx={{ fontSize: 30 }} />
        </Badge>
      </Link>
    </div>
  );
}

export default CartIcon;
