import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
function CartIcon() {
  return (
    <div>
      <Badge badgeContent={1} color="primary">
        <ShoppingCartOutlinedIcon color="action" sx={{ fontSize: 30 }} />;
      </Badge>
    </div>
  );
}

export default CartIcon;
