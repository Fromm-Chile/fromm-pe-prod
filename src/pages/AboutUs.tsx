import { InfoBanner } from "../components/InfoBanner";

export const AboutUs = () => {
  return (
    <>
      <InfoBanner
        category="NOSOTROS"
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/Flugzeug.jpg"
        alt="nosotros"
        title="ACERCA DE FROMM CHILE"
        desc="LOS ESPECIALISTAS EN SOLUCIONES DE ENZUNCHADO."
        link="/productos"
        buttonTitle="Ver Productos"
      />
      <section className="px-10 md:m-auto md:mt-20 md:mb-10">
        <div className="md:flex md:gap-10 md:max-w-[875px] md:m-auto md:mb-10">
          <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
            <span className="text-red font-extralight">Papel Airpad™</span>{" "}
            <br />
            Material de relleno de papel
          </h2>
          <div className="mb-3 font-light">
            <p className="mb-5 md:text-lg">
              ¿Buscas un material de relleno sostenible para tus embalajes?
              Elige el papel Airpad™. Esto no solo garantiza que tus productos
              estén protegidos de forma óptima, sino que también contribuyes a
              un mundo más sostenible. ¿Cuáles son las ventajas del material de
              relleno de papel? Es respetuoso con el medio ambiente y
              biodegradable. Después de su uso, el material de relleno se
              descompone fácilmente en la naturaleza, sin afectar negativamente
              al medio ambiente. ¡Tíralo de forma ordenada junto con el papel
              usado!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
