import { Button, TextField } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Form.css"

const Form = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="formularioContainer">
        <TextField
          sx={{ margin: 1 }}
          className="textField"
          label="email"
          name="email"
          variant="outlined"
          size="small"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          sx={{ margin: 1 }}
          className="textField"
          label="nombre"
          name="nombre"
          variant="outlined"
          size="small"
          type="text"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          sx={{ margin: 1 }}
          className="textField"
          label="apellido"
          name="apellido"
          variant="outlined"
          size="small"
          type="text"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
        />
        <Button
          sx={{ marginTop: 1 }}
          type="submit"
          variant="contained"
          color="inherit"
          className="button"
        >
          Unirme
        </Button>
        <div className="icon">
          <InstagramIcon color="action" />
        </div>
        <div className="icon">
          <FacebookIcon color="action" />
        </div>
        <div className="icon">
          <WhatsAppIcon color="action" />
        </div>
      </form>
    </div>
  );
};

export default Form;
