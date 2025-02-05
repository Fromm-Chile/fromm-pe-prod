import { InfoBanner } from "../components/InfoBanner";
import { ServiceForm } from "../components/ServiceForm";

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
      <section className="px-10 md:max-w-[875px] md:m-auto mt-20 md:mb-10 md:mt-20">
        <div className="mb-10">
          <p className="mb-5">
            FROMM Chile. Cuenta con servicio técnico especializado para las
            Enzunchadoras FROMM, posee técnicos con experiencia para realizar
            mantenciones integrales, para maquinas manuales, eléctricas,
            neumáticas y sistemas de fin de línea.
          </p>
        </div>
        <div className="text-textGray bg-primaryGray p-6">
          <p className="text-xl font-bold mb-3">
            Nuestro principal objetivo es entregar un servicio personalizado y
            de calidad, garantizando el funcionamiento óptimo de sus
            herramientas de embalaje.
          </p>
        </div>
      </section>
      <ServiceForm
        titulo="SOLICITUD DE SERVICIO TÉCNICO"
        descripcion="Si desea realizar mantención preventiva, correctiva o adquirir algún repuesto para sus equipos, no dude en contactase con nuestro servicio."
      />
    </>
  );
};
