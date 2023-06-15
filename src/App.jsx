import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Portada from "./components/layout/portada/Portada";
import ProductListContainer from "./components/pages/productListContainer/ProductListContainer";
import ProductDetailContainer from "./components/pages/productDetail/ProductDetailContainer";
import Layout from "./components/layout/Layaout/Layout";
import CartContainer from "./components/layout/cart/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<Portada />} />  */}
          <Route path="/" element={<ProductListContainer />} />
          <Route path="/products" element={<ProductListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ProductListContainer />}
          />
          <Route path="/detail/:id" element={<ProductDetailContainer />} />
          <Route path="/carrito" element={<CartContainer />} />
        </Route>

        <Route path="*" element={<h1>404 Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
