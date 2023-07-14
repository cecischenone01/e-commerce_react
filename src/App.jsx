import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layaout/Layout";
import { menuRoutes } from "./routes/menuRoutes";
import CartContextProvider from "./context/CartContex";


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {menuRoutes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
          <Route path="*" element={<h1>404 Not found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
