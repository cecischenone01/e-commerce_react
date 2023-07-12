import { Button, TextField } from "@mui/material";
import "./checkOut.css";

const CheckOut = ({handleSubmit, handleChange, errors, orderId}) => {
  return (
    <>
      {orderId ? (
        <div>
          <h1>Su compra se realizó con exito</h1>
          <h3>Orden N°: {orderId}</h3>
        </div>
      ) : (
        <div className="container">
          <form className="formContainer" onSubmit={handleSubmit}>
            <div className="textfieldContainer">
              <TextField
                className="textfield"
                label="Nombre"
                variant="outlined"
                name="nombre"
                onChange={handleChange}
                helperText={errors.nombre}
                error={errors.nombre ? true : false}
              />
            </div>
            <div className="textfieldContainer">
              <TextField
                className="textfield"
                label="Email"
                variant="outlined"
                name="email"
                onChange={handleChange}
                helperText={errors.email}
                error={errors.email ? true : false}
              />
            </div>
            <div className="textfieldContainer">
              <TextField
                className="textfield"
                label="Teléfono"
                variant="outlined"
                name="telefono"
                onChange={handleChange}
                helperText={errors.telefono}
                error={errors.telefono ? true : false}
              />
            </div>
            <Button variant="contained" type="submit">
              Finalizar compra
            </Button>
          </form>
        </div>
      )}
    </>
  );
}

export default CheckOut