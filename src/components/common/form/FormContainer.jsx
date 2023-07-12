import { useFormik } from "formik";
import Form from "./Form";
import * as Yup from "yup"


const FormContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      nombre: "",
      apellido: "",
    },
    onSubmit: (datos) => {
      console.log("el form se envio");
      console.log(datos);
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
