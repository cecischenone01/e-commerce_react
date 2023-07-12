/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
""

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState(
      JSON.parse(localStorage.getItem("cart")) || []
    );

    const addToCart = (newProduct) => {
      let exist = isInCart(newProduct.id);
      if (exist) {
        let newArray = cart.map((product) => {
          if (product.id === newProduct.id) {
            return {
              ...product,
              quantity: newProduct.quantity,
            };
          } else {
            return product;
          }
        });
        setCart(newArray);
        localStorage.setItem("cart", JSON.stringify(newArray))
      } else {
        setCart([...cart, newProduct]);
        localStorage.setItem("cart", JSON.stringify([...cart, newProduct]));
      }
    };
    const isInCart = (id)=>{
        let exist = cart.some(prod => prod.id === id)
        return exist
    }
    const clearCart = ()=>{
        setCart ([])
        localStorage.removeItem("cart");
    }
    const clearById = (id)=>{
        let newArr = cart.filter((product)=> product.id !== id)
        setCart(newArr)
        localStorage.setItem( "cart", JSON.stringify(newArr))
    }
    const totalQuantityById = (id)=>{
        let product= cart.find(prod=> prod.id === id)
        return product?.quantity
    }
    const getTotalItems = ()=>{
      let total = cart.reduce((acc, element)=> {
        return acc + element.quantity
      }, 0)
      return total
    }
    const getTotalPrice = ()=>{
      let total = cart.reduce((acc, element) => {
        return acc + (element.quantity * element.price)
    }, 0)
    return total;
  }
    let data = {
      cart,
      addToCart,
      clearCart,
      clearById,
      totalQuantityById,
      getTotalItems,
      getTotalPrice,
    };


    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
