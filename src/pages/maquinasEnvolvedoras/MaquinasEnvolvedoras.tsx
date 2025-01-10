import { InfoBanner } from "../../components/InfoBanner";
import { InfoProductCard } from "../../components/InfoProductCard";
import { envolvedoras } from "../../Data/envolvedoraData";

export const MaquinasEnvolvedoras = () => {
  return (
    <>
      <InfoBanner
        video
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/maquinaenvolvedora.mp4"
        alt="Maquina envolvedora"
        title="ENVOLVEDORAS"
        desc="LIDERES EN MAQUINARIA ENVOLVEDORA"
        sinBoton
        link=""
      />
      <section className="px-10 md:max-w-[875px] md:m-auto md:mt-20 md:mb-10">
        <div className="mb-10">
          <p className="mb-5">
            FROMM es especialista en soluciones de embalaje. Fabricamos máquinas
            de embalaje con film y consumibles de alta calidad para su uso a
            gran escala en todos los mercados, desde la industria del hormigón
            hasta los centros de distribución y desde la industria maderera
            hasta la agricultura. Y todo lo que hay entre medias. Trabajamos en
            todo el mundo con más de 1.200 especialistas en el desarrollo, la
            producción y la venta de máquinas de embalaje de final de línea,
            equipos y consumibles. Para lograrlo, colaboramos con más de veinte
            filiales y cincuenta socios especializados. Ya contamos con una
            amplia gama de clientes satisfechos. ¿Será usted el próximo?
          </p>
        </div>
        <div className="text-textGray bg-primaryGray p-6">
          <p className="text-xl font-bold mb-3">Si eliges FROMM, eliges...</p>
          <ul className="flex flex-col gap-2">
            <li>
              Máquinas de embalaje de bajo mantenimiento y consumibles de alta
              calidad
            </li>
            <li>
              Atención personalizada por parte de especialistas que optimizan su
              proceso de embalaje
            </li>
            <li>Acuerdos claros y concretos sobre servicio y mantenimiento</li>
            <li>
              Costes de embalaje más bajos gracias a la innovación continua
            </li>
            <li>
              Contratos favorables, excelente soporte técnico y repuestos de
              nuestro propio almacén
            </li>
          </ul>
        </div>
      </section>
      <div className="p-10 bg-primaryGray text-textGray mb-20 md:px-24">
        <h2 className="md:text-textGray md:text-4xl md:font-semibold md:mt-5 md:text-center">
          NUESTRA MAQUINARIA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:py-10">
          {envolvedoras.map((herramienta) => (
            <InfoProductCard
              key={herramienta.id}
              srcImg={herramienta.srcImg}
              alt={herramienta.alt}
              solution={herramienta.solution}
              product={herramienta.product}
              desc={herramienta.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};
