import ProductCard from "../../common/productCard/ProductCard";
import "./ProductList.css"

const ProductList = ({products}) => {
  return (
    <div className= "cardsContainer">
      {products.map((elemento)=>{
          return (
            <ProductCard key={elemento.id} elemento={elemento}/>
          );
        })
      }
    </div>
  );
}

export default ProductList