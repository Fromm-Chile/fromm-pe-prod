import { InfoBanner } from "../components/InfoBanner";

export const OrganizacionServicios = () => {
  return (
    <>
      <InfoBanner
        category="NOSOTROS"
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/Wolfen.jpg"
        alt="organizacion"
        title="ORGANIZACIÓN DE SERVICIOS"
        desc="SERVICIOS DE CALIDAD"
        link="/productos"
        buttonTitle="Ver Productos"
      />
      <section className="px-10 md:max-w-[875px] md:m-auto mt-10 md:mt-20 md:mb-20">
        <div>
          <h2 className="text-textGray text-2xl font-bold mb-6 uppercase">
            Organización de servicios
          </h2>
          <div className="mb-10">
            <p className="mb-5">
              FROMM se ocupa de todo por usted en lo que respecta al embalaje
              logístico final. Nuestras máquinas requieren menos mantenimiento y
              consumen mucho menos material de embalaje. Nuestros asesores le
              ayudarán a encontrar la mejor opción para sus necesidades. Si algo
              sale mal, nuestro propio departamento de servicio está listo para
              atenderle. Siempre que sea posible, recibirá un equipo de repuesto
              mientras se realiza la reparación.
            </p>
            <div className="mb-10">
              <h2 className="text-textGray text-lg font-bold mb-6">
                Durabilidad y facilidad de uso
              </h2>
              <p className="mb-5">
                Las máquinas FROMM están fabricadas con un mínimo de piezas
                móviles (sensibles al desgaste). La durabilidad y la facilidad
                de uso son primordiales en el diseño. Su personal puede empezar
                a utilizarlas casi de inmediato. Con una alta calidad, FROMM se
                ha ganado una clara posición en el crítico mundo del embalaje.
                No en vano nuestros productos son vendidos incluso por nuestros
                competidores.
              </p>
            </div>
            <div className="mb-10">
              <h2 className="text-textGray text-lg font-bold mb-6">
                Material de embalaje innovador
              </h2>
              <p className="mb-5">
                Completamos nuestras máquinas FROMM de alta calidad con material
                de embalaje innovador. Desarrollamos teniendo en cuenta la
                sostenibilidad. Lo hacemos no solo para proteger el medio
                ambiente, sino también porque es más fácil de procesar y reduce
                los costes. Un ejemplo son las instalaciones de pre-estiramiento
                que pueden reducir el consumo de film de embalaje hasta en un 80
                por ciento. Le ayudamos a embalar sin preocupaciones con
                desarrollos inteligentes y asesoramiento personalizado.
              </p>
            </div>
            <div className="mb-10">
              <h2 className="text-textGray text-lg font-bold mb-6">
                Garantía estándar de 24 meses
              </h2>
              <p className="mb-5">
                Nuestro compromiso con la alta calidad se refleja en la garantía
                de 24 meses que ofrecemos en todos los dispositivos y máquinas
                producidos por FROMM. Con condiciones muy atractivas, puede
                asegurarse de poder seguir trabajando prácticamente sin
                interrupciones con el sistema de servicio rápido FROMM (QSS) o
                el plan de ventajas combinadas (CVP).
              </p>
            </div>
            <div className="mb-10">
              <h2 className="text-textGray text-lg font-bold mb-6">
                Nuestro propio servicio interno y externo
              </h2>
              <p className="mb-5">
                Ofrecemos un servicio de préstamo único para dispositivos
                portátiles. Durante las reparaciones, se le proporcionará un
                dispositivo de reemplazo. Para máquinas más grandes, existen
                condiciones que se adaptan a las condiciones de uso. En la
                mayoría de los casos, podemos gestionar las reparaciones muy
                rápidamente. Contamos con nuestro propio servicio interno y
                externo y gestionamos el almacén con repuestos para el norte de
                Europa.
              </p>
            </div>
          </div>
        </div>
        <img
          src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/organizacionimagen.webp"
          alt="organizacion"
        />
      </section>
    </>
  );
};
