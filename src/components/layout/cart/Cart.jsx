import { Link } from "react-router-dom";
import "./cart.css";
import CartCardContainer from "../../common/CartCard/CartCardContainer";
import { Button, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Cart = ({ clear, clearById, cart, totalPrice }) => {
  return (
    <div className="cartContainer">
      {cart.length > 0 ? (
        <div className="cardCartContainer">
          <div>
            {cart.map((product) => {
              return (
                <div key={product.id}>
                  <div>
                    <CartCardContainer
                      key={product.id}
                      elemento={product}
                      clearById={clearById}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="descriptionCart">
            <div className="totalTitle">
              <Typography variant="h4" sx={{ marginBottom: 10 }}>
                Total de su compra: ${totalPrice}
              </Typography>
            </div>
            <div className="buttons">
              <Button
                sx={{ marginRight: 2 }}
                variant="contained"
                onClick={clear}
              >
                Limpiar carrito
              </Button>
              <Link to="/checkout">
                <Button sx={{ marginLeft: 2 }} variant="contained">
                  Comprar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="emptyCartContainer">
          <AddShoppingCartIcon
            sx={{ fontSize: 60, marginBottom: 2 }}
            color="action"
          />
          <Typography variant="h4">El carrito está vacío</Typography>
          <Link to="/products">
            <Button variant="contained" sx={{ marginTop: 2 }}>
              Seguir comprando
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
