import { useContext, useEffect, useState } from "react"
import ProductDetail from "./ProductDetail"
import { useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContex"
import Swal from "sweetalert2";
import { dataBase } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";


const ProductDetailContainer = () => {
    const [ detailProduct, setDetailProduct] = useState({})

    const { addToCart, totalQuantityById } = useContext(CartContext);

    const {id} = useParams()

    const quantity = totalQuantityById(id)

      const onAdd = (cantidad) => {
        let data = {
          ...detailProduct,
          quantity: cantidad,
        };
        addToCart(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El producto fue añadido con éxito",
          showConfirmButton: false,
          timer: 1500,
        });
      };

    useEffect(()=>{
    let itemsCollection = collection(dataBase, "products");
    let refDoc = doc(itemsCollection, id);
    getDoc(refDoc)
    .then((res)=>{
      setDetailProduct({id:res.id, ...res.data()})
    })
    .catch((err)=>console.log(err))

    },[id]);

  return (
    <ProductDetail
      detailProduct={detailProduct}
      addToCart={addToCart}
      quantity={quantity}
      onAdd={onAdd}
    />
  );
}

export default ProductDetailContainer