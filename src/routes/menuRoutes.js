import CartContainer from "../components/layout/cart/CartContainer";
import Portada from "../components/layout/portada/Portada";
import CheckOutContainer from "../components/pages/checkout/CheckOutContainer";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";
import ProductListContainer from "../components/pages/productListContainer/ProductListContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: Portada,
  },
  {
    id: "products",
    path: "/products",
    Element: ProductListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ProductListContainer,
  },
  {
    id: "detail",
    path: "/detail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "cart",
    path: "/carrito",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckOutContainer,
  },
];