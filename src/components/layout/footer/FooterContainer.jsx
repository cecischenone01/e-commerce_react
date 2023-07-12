import "./Footer.css"
import FormContainer from "../../common/form/FormContainer";

const FooterContainer = () => {
  return (
    <div className="footerContainer">
      <div className="newsLetterContainer">
        <h1>Recibí nuestras novedades</h1>
        <FormContainer />
      </div>
      <div className="infoContainer">
        <div className="navFooterContainer">
          <ul>
            <li>inicio</li>
            <li>productos</li>
            <li>lanas</li>
            <li>agujas</li>
            <li>alfileres</li>
          </ul>
        </div>
        <div className="contactContainer">
          <h2>Dirección</h2>
          <h3>Suipacha 2023, Rosario, Santa Fe, Argentina</h3>
          <h2>Teléfono</h2>
          <h3>46264586</h3>
          <h2>Horarios</h2>
          <h3>lunes a sabados de 09:00 a 18:00 hs</h3>
          <h2>E-mail</h2>
          <h3>mercerianevilan@gmail.com</h3>
        </div>
      </div>
    </div>
  );
}

export default FooterContainer