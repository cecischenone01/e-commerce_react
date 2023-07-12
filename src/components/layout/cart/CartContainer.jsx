import { useContext } from "react"
import { CartContext } from "../../../context/CartContex"
import Swal from "sweetalert2";
import Cart from "./Cart";

const CartContainer = () => {
  const {cart, clearCart, clearById, getTotalPrice} = useContext(CartContext)
  console.log(cart)

  const totalPrice = getTotalPrice()

const clear = ()=>{
  Swal.fire({
    title: "Seguro quieres limpiar el carrito?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Limpiar",
    denyButtonText: `Cancelar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      clearCart()
      Swal.fire("Carrito limpio", "", "success");
    }
  });
}

  return (
    <Cart
      clear={clear}
      clearById={clearById}
      cart={cart}
      totalPrice={totalPrice}
    />
  );
}

export default CartContainer