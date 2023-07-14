import "./Footer.css";
import FormContainer from "../../common/form/FormContainer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const FooterContainer = () => {
  return (
    <div className="footerContainer">
      <div className="newsLetterContainer">
        <h1 className="title">¡Unite a nuestra comunidad!</h1>
        <FormContainer />
      </div>
      <div className="infoContainer">
        <div className="itemContainer">
          <LocationOnIcon sx={{ fontSize: 40, marginBottom: 1 }} />
          <h2>Dirección</h2>
          <h4>Suipacha 2023, Rosario, Santa Fe, Argentina</h4>
        </div>
        <div className="itemContainer">
          <PhoneInTalkIcon sx={{ fontSize: 40, marginBottom: 1 }} />
          <h2>Teléfono</h2>
          <h4>46264586</h4>
        </div>
        <div className="itemContainer">
          <AccessAlarmIcon sx={{ fontSize: 40, marginBottom: 1 }} />
          <h2>Horarios</h2>
          <h4>lunes a sabados de 09:00 a 18:00 hs</h4>
        </div>
        <div className="itemContainer">
          <MailOutlineIcon sx={{ fontSize: 40, marginBottom: 1 }} />
          <h2>Email</h2>
          <h4>mercerianevilan@gmail.com</h4>
        </div>
      </div>
      <div className="copyright">
        <h4>
          ©Copyright 2021 Mercería Nevilan | Todos los derechos reservados
        </h4>
      </div>
    </div>
  );
};

export default FooterContainer;
