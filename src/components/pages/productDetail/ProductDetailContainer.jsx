import { useEffect, useState } from "react"
import ProductDetail from "./ProductDetail"
import {products} from "../../../ProductsMock"
import { useParams } from "react-router-dom"

const ProductDetailContainer = () => {
    const [ detailProduct, setDetailProduct] = useState({})

    const {id} = useParams()

    useEffect(()=>{
        let productFind= products.find((product)=> product.id === Number(id))

        const getProduct = new Promise ((res)=>{
            res(productFind)
        })
        getProduct.then((res)=> setDetailProduct(res)).catch((err)=>console.log(err))

    },[id]);

  return (
    <ProductDetail detailProduct={detailProduct}/>
  );
}

export default ProductDetailContainer