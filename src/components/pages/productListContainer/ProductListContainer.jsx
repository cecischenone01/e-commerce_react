import useFetch from "../../hooks/useFetch";
import ProductList from "./ProductList";

const ProductListContainer = () => {

  const [products] = useFetch([])
  
  return (
    <>
    <ProductList products={products} />
    </>
  ) ;
};

export default ProductListContainer;
