import { InfoBanner } from "../components/InfoBanner";
import { ContactForm } from "../components/ContactForm";

export const Contacto = () => {
  return (
    <>
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/contacto.jpg"
        title="¿Necesitas ayuda?"
        desc="Enviamos un mensaje y nos pondremos en contacto"
        link=""
        sinBoton
        alt="contacto"
        category="CONTACTO"
      />
      <ContactForm
        titulo="FORMULARIO DE CONTACTO"
        descripcion="Envíanos un mensaje y nos pondremos en contacto contigo a la brevedad"
      />
    </>
  );
};
