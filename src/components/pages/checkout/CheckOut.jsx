import { Button, TextField, Typography } from "@mui/material";
import "./checkOut.css";

const CheckOut = ({handleSubmit, handleChange, errors, orderId}) => {
  return (
    <div className="coContainer">
      {orderId ? (
        <div>
          <Typography variant="h4">¡Su compra se realizó con exito!</Typography>
          <Typography variant="h6">Orden N°: {orderId}</Typography>
        </div>
      ) : (
        <div>
          <form className="formContainer" onSubmit={handleSubmit}>
            <div className="textfieldContainer">
              <div className="titleContainer">
                <Typography variant="h4">
                  ¡Estas a un paso de finalizar tu compra!
                </Typography>
                <Typography variant="h6">
                  Por favor completá el siguiente formulario con tus datos.
                </Typography>
              </div>
              <TextField
                className="textfield"
                label="nombre"
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
                label="email"
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
                label="telefono"
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
    </div>
  );
}

export default CheckOut