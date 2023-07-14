import { useFormik } from "formik";
import Form from "./Form";
import * as Yup from "yup"
import { dataBase } from "../../../firebaseConfig";
import { collection, addDoc} from "firebase/firestore";
import Swal from "sweetalert2";


const FormContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      nombre: "",
      apellido: "",
    },
    onSubmit: (datos) => {
      let users={
        userData: datos
      }

      let usersCollection = collection(dataBase, "users")
      addDoc(usersCollection, users)

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Felicidades!",
        text: "Ya estas registrado para recibir nuestras novedades.",
        showConfirmButton: false,
        timer: 4000,
      });
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string().email("La dirección de correo electronico no es válida.").required("Este campo es requerido."),
      nombre: Yup.string()
        .required("Este campo es requerido.")
        .min(3, "El campo debe contener al menos 3 letras."),
      apellido: Yup.string()
        .required("Este campo es requerido.")
        .min(3, "El campo debe contener al menos 3 letras."),
    }),
  });

  return (
    <Form handleSubmit={handleSubmit} handleChange={handleChange} errors={errors}/>
  )
};

export default FormContainer;
