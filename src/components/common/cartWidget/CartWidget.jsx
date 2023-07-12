import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

function CartWidget({totalItems}) {
  return (
    <div>
      <Link to="/carrito">
        <Badge badgeContent={totalItems} showZero color="error">
          <ShoppingCartOutlinedIcon color="action" sx={{ fontSize: 30 }} />
        </Badge>
      </Link>
    </div>
  );
}

export default CartWidget;
