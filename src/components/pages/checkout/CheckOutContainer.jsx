import CheckOut from "./CheckOut"
import { useFormik } from "formik";
import * as Yup from "yup"
import { dataBase } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc} from "firebase/firestore"
import { useContext } from "react";
import { CartContext } from "../../../context/CartContex";
import { useState } from "react";

const CheckOutContainer = () => {
  const { cart, getTotalPrice, clearCart} = useContext(CartContext);
  const [orderId, setOrderId] = useState(null)
  let total= getTotalPrice()
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total
      }

      let ordersCollection = collection(dataBase, "orders")
      addDoc(ordersCollection, order).then(res => setOrderId(res.id))

      cart.forEach((product)=>{
        updateDoc(doc(dataBase, "products", product.id),{
          stock: product.stock - product.quantity,
        });
      })

      clearCart()
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es obligatorio.")
        .min(3, "El campo debe contener al menos 3 caracteres."),
      email: Yup.string().required("Este campo es obligatorio.").email("Ingrese una dirección de correo electrónico válida."),
      telefono: Yup.string()
        .required("Este campo es obligatorio.")
        .length(10, "No corresponde a un número de teléfono válido."),
    }),
  });

  return (
    <CheckOut handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} orderId={orderId}/>
  )
}

export default CheckOutContainer
