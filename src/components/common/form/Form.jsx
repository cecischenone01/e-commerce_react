import { Button, TextField } from "@mui/material";

const Form = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="emailId"
          label="email"
          name="email"
          variant="standard"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          id="nombreId"
          label="nombre"
          name="nombre"
          variant="standard"
          type="text"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          id="apellidoId"
          label="apellido"
          name="apellido"
          variant="standard"
          type="text"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
        />
        <Button type="submit" variant="contained">
          Unirme
        </Button>
      </form>
    </div>
  );
};

export default Form;
