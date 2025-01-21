import { InfoBanner } from "../components/InfoBanner";

export const ServicioTecnico = () => {
  return (
    <>
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/servicio-tecnico.webp"
        title="SERVICIO TÉCNICO"
        alt="servicio-tecnico"
        category="CONTACTO"
        desc="Nuestro equipo de técnicos especializados en maquinaria de embalaje, le brindará el soporte necesario para mantener su equipo en óptimas condiciones de funcionamiento."
        link="/contacto"
        buttonTitle="Contáctanos"
      />
    </>
  );
};
