import { Link } from "react-router-dom";
import ProductCard from "../../common/productCard/ProductCard";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Cart = ({clear, clearById, cart, totalPrice}) => {
  return (
    <>
      <div>
        {cart.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard key={product.id} elemento={product} />;
              <h3>Cantidad: {product.quantity}</h3>
              <button onClick={() => clearById(product.id)}>
                <DeleteOutlineOutlinedIcon />
              </button>
            </div>
          );
        })}
      </div>
      <div>
        {cart.length > 0 ? (
          <button onClick={clear}>Limpiar</button>
        ) : (
          <h2>El carrito está vacío</h2>
        )}
      </div>
      <div>
        <Link to="/checkout">
          <button>Comprar</button>
        </Link> 
      </div>
      <div>
        <h2>Total: {totalPrice} </h2>
      </div>
    </>
  );
};

export default Cart