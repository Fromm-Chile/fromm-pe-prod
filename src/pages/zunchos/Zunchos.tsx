import { Button } from "../../components/commons/Button";

export const Zunchos = () => {
  return (
    <>
      <div>
        <div>
          <img
            src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadora.jpg"
            alt="enzunchadora"
          />
        </div>
        <div className="p-6 text-white bg-red flex flex-col gap-5">
          <p className="font-extralight tracking-widest mt-10">SOLUCIONES</p>
          <p className="font-bold text-2xl">ZUNCHOS</p>
          <p className="font-extralight">
            HERRAMIENTAS DE ENZUNCHADO PARA USO A GRAN ESCALA
          </p>
          <Button link="/" whiteButton>
            VER PRODUCTOS
          </Button>
        </div>
      </div>
      <div className="p-10">
        <p>
          ¿Está buscando una herramienta de enzunchado que funcione para usted?
          Ha llegado al lugar correcto.
        </p>
      </div>
      <div className="p-8">
        <div className="text-textGray bg-primaryGray p-6">
          <p className="text-xl font-bold mb-3">Garantizamos:</p>
          <ul className="flex flex-col gap-2">
            <li>
              Una enzunchadora de bajo mantenimiento y un zuncho de alta calidad
            </li>
            <li>
              Atención personalizada por parte de especialistas que optimizan el
              proceso de embalaje
            </li>
            <li>Acuerdos claros en cuanto a servicio y mantenimiento</li>
          </ul>
        </div>
      </div>
      <h2 className="text-textGray text-lg font-bold ml-10">Una herramienta enzunchadora líder</h2>
      <div className="p-10">
        <p className="mb-5">
          Fabricamos máquinas flejadoras y consumibles de alta calidad para su
          uso a gran escala en la industria del hormigón, centros de
          distribución, logística, industria maderera y metalúrgica. En todo el
          mundo, colaboramos con más de 1.200 especialistas en el desarrollo, la
          producción y la venta de máquinas de embalaje de final de línea,
          equipos y consumibles. En total, colaboramos con veinte filiales y
          cincuenta socios especializados.
        </p>
        <Button className="m-auto" link="/">DEJANOS AYUDARTE</Button>
      </div>
      <div className="p-10 bg-primaryGray text-textGray mb-5">
        <h2>LA HERRAMIENTA DE ENZUNCHADO ADECUADA</h2>

      </div>
    </>
  );
};
