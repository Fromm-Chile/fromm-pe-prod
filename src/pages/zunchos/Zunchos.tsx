import { useState } from "react";
import { Button } from "../../components/commons/Button";
import { FocusCards } from "../../components/ui/focus-card";
import { InfoBanner } from "../../components/InfoBanner";

type ServiceData = {
  id: number;
  title: string;
  description: string;
};

const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "ATENCION PERSONALIZADA",
    description:
      "Nos encantan todos los desafíos de embalaje. Por eso nos gusta trabajar en estrecha colaboración con sus especialistas. A partir de esa colaboración personal, logramos una solución de embalaje óptima para el final de la línea.",
  },
  {
    id: 2,
    title: "ALTA CALIDAD",
    description:
      "FROMM trabaja exclusivamente con materiales de alta calidad, lo que subraya nuestra posición de liderazgo en materia de productos y servicios sostenibles.",
  },
  {
    id: 3,
    title: "COSTOS DE EMBALAJE MÁS BAJOS",
    description:
      "Gracias a la innovación continua, garantizamos unos costes mínimos en el embalaje de todos los materiales. Nuestros sistemas inteligentes utilizan la menor cantidad posible de materiales de embalaje. Y eso cuenta.",
  },
  {
    id: 4,
    title: "COMUNICACIÓN DIRECTA CON EL FABRICANTE",
    description:
      "FROMM desarrolla y produce máquinas y consumibles en nuestras instalaciones, por lo que ofrecemos contratos de mantenimiento ventajosos y contamos con un excelente servicio técnico con repuestos propios.",
  },
  {
    id: 5,
    title: "ACCESO A UN SERVICIO DE PRIMERA",
    description:
      "Especialistas apasionados y atención personalizada. Con esto nos aseguramos de que su proceso de embalaje siga funcionando. En caso de cualquier avería estamos listos para empezar para que pueda seguir empaquetando sin problemas.",
  },
  {
    id: 6,
    title: "ENTREGAS RÁPIDAS",
    description:
      "Garantizamos entregas rápidas. Esto es posible en parte gracias al desarrollo y producción propios de nuestras máquinas y consumibles.",
  },
];

type ProductsCard = {
  id: number;
  src: string;
  title: string;
  link: string;
};

const productsCard: ProductsCard[] = [
  {
    id: 1,
    src: "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/zunchoglassclose.jpeg",
    title: "Zunchos",
    link: "/zunchos",
  },
  {
    id: 2,
    src: "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/envolvedorahorizontal.png",
    title: "Envolvedoras",
    link: "/envolvedoras",
  },
  {
    id: 3,
    src: "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/airpadhorizontal.jpeg",
    title: "Airpads",
    link: "/airpads",
  },
];

export const Zunchos = () => {
  const [openAcordeon, setOpenAcordeon] = useState<number | null>(null);

  const handleAccordion = (id: number) =>
    setOpenAcordeon((prev) => (prev === id ? null : id));

  return (
    <>
    <InfoBanner 
      srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadora.jpg"
      alt="enzunchadora"
      title="ZUNCHOS"
      desc="HERRAMIENTAS DE ENZUNCHADO PARA USO A GRAN ESCALA"
      buttonTitle="VER PRODUCTOS"
      link="/"
    />
      <section className="px-10 md:max-w-[875px] md:m-auto">
        <div className="my-10 p-8">
          <p>
            ¿Está buscando una herramienta de enzunchado que funcione para
            usted? Ha llegado al lugar correcto.
          </p>
        </div>
        <div className="mb-6">
          <div className="text-textGray bg-primaryGray p-6">
            <p className="text-xl font-bold mb-3">Garantizamos:</p>
            <ul className="flex flex-col gap-2">
              <li>
                Una enzunchadora de bajo mantenimiento y un zuncho de alta
                calidad
              </li>
              <li>
                Atención personalizada por parte de especialistas que optimizan
                el proceso de embalaje
              </li>
              <li>Acuerdos claros en cuanto a servicio y mantenimiento</li>
            </ul>
          </div>
        </div>
        <h2 className="text-textGray text-lg font-bold mb-4">
          Una herramienta enzunchadora líder
        </h2>
        <div className="mb-10">
          <p className="mb-5">
            Fabricamos máquinas flejadoras y consumibles de alta calidad para su
            uso a gran escala en la industria del hormigón, centros de
            distribución, logística, industria maderera y metalúrgica. En todo
            el mundo, colaboramos con más de 1.200 especialistas en el
            desarrollo, la producción y la venta de máquinas de embalaje de
            final de línea, equipos y consumibles. En total, colaboramos con
            veinte filiales y cincuenta socios especializados.
          </p>
          <Button className="m-auto" link="/">
            DEJANOS AYUDARTE
          </Button>
        </div>
      </section>
      <div className="p-10 bg-primaryGray text-textGray mb-20 md:px-24">
        <h2 className="md:text-textGray md:text-4xl md:font-semibold md:mt-5">
          LA HERRAMIENTA DE ENZUNCHADO ADECUADA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:py-10">
          <div className="bg-white px-5 py-8 my-5 rounded-md hover:shadow-2xl hover:border hover:border-red transition-all ease duration-500">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadoraelectrica.jpg"
              alt="enzunchadora-electrica"
            />
            <div>
              <p className="tracking-widest text-red font-extralight text-lg">
                ZUNCHOS
              </p>
              <p className="text-lg font-bold mb-8">Enzunchadoras Eléctricas</p>
              <p className="text-textGray text-base font-light mb-3">
                Equipamiento de última tecnología FROMM para enzunchado manual
              </p>
              <ul className="text-textGray text-base font-light mb-3 flex flex-col gap-2">
                <li>Diseno inteligente para bajo mantenimiento</li>
                <li>El mejor equipo de enzunchado a nivel mundial</li>
              </ul>
            </div>
          </div>
          <div className="bg-white px-5 py-8 my-5 rounded-md hover:shadow-xl transition-shadow ease-in-out duration-500">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadoramanual.jpeg"
              alt="enzunchadora-electrica"
            />
            <div>
              <p className="tracking-widest text-red font-extralight text-lg">
                ZUNCHOS
              </p>
              <p className="text-lg font-bold mb-8">Enzunchadoras Manuales</p>
              <p className="text-textGray text-base font-light mb-3">
                Equipamiento de última tecnología FROMM para enzunchado manual
              </p>
              <ul className="text-textGray text-base font-light mb-3 flex flex-col gap-2">
                <li>Diseno inteligente para bajo mantenimiento</li>
                <li>El mejor equipo de enzunchado a nivel mundial</li>
              </ul>
            </div>
          </div>
          <div className="bg-white px-5 py-8 my-5 rounded-md hover:shadow-xl transition-shadow ease-in-out duration-500">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadoraneumatica.jpeg"
              alt="enzunchadora-electrica"
            />
            <div>
              <p className="tracking-widest text-red font-extralight text-lg">
                ZUNCHOS
              </p>
              <p className="text-lg font-bold mb-8">Enzunchadoras Neumáticas</p>
              <p className="text-textGray text-base font-light mb-3">
                Equipamiento de última tecnología FROMM para enzunchado manual
              </p>
              <ul className="text-textGray text-base font-light mb-3 flex flex-col gap-2">
                <li>Diseno inteligente para bajo mantenimiento</li>
                <li>El mejor equipo de enzunchado a nivel mundial</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="px-10 mb-10">
        <div className="md:max-w-[875px] md:m-auto">
          <div>
            <h2 className="text-textGray text-lg font-bold mb-6">
              Una herramienta de enzunchado de alta calidad
            </h2>
            <div className="mb-3">
              <p className="mb-5">
                Un embalaje logístico eficaz se basa en un equilibrio
                inteligente entre costes y requisitos. Suministramos
                herramientas de flejado de alta calidad y cintas de flejado de
                máxima calidad. Esto le permite trabajar de forma rápida,
                eficiente y sostenible.
              </p>
            </div>
          </div>
          <div className="mb-20">
            <h2 className="text-textGray text-lg font-bold mb-6">
              Líneas de enzunchado completamente automáticas
            </h2>
            <div className="mb-3">
              <p className="mb-5">
                Para el transporte de grandes cantidades de mercancías, una
                máquina flejadora totalmente automática es la mejor opción desde
                el punto de vista económico y empresarial. Cuanto más se
                empaqueta para el transporte, más rápido se recupera el dinero
                de la máquina gracias al ahorro inteligente en horas de trabajo
                y material de embalaje. El flejado es un método de embalaje
                eficaz. Nuestras máquinas flejadoras garantizan que se utilice
                la menor cantidad posible de cinta de flejado para asegurar la
                carga. ¿El resultado? Uso económico de materiales y estabilidad
                óptima durante el transporte.
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex md:gap-10 md:max-w-[1250px] md:m-auto md:mb-10 md:flex-row-reverse">
          <div className="md:w-[80%]">
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              Tipos de cinta de zunchos
            </h2>
            <div className="mb-3">
              <p className="mb-5 md:text-lg">
                No hay solución de flejado sin cinta de fleje. Para encontrar
                siempre una solución adecuada, ofrecemos cuatro tipos diferentes
                de cinta de fleje. En primer lugar: fleje de PP. Perfecto para
                trabajos más ligeros como listones pequeños y paquetes. Nuestro
                fleje de PP está disponible en varios tamaños y es resistente a
                las condiciones climáticas. También ofrecemos fleje de PET. Este
                tiene una excelente elasticidad. Esto le permite flejar
                firmemente paquetes y paquetes con una pérdida mínima de
                elasticidad. ¿Busca una cinta de fleje para entornos pesados?
                Entonces nuestro fleje de PET más resistente o fleje de acero es
                la elección correcta. Extremadamente fuerte y resistente. Y eso
                sin usar mucho material. Haga los cálculos. Por último: cinta de
                fleje de papel. Flejar con papel, ¿quién lo hubiera pensado? Es
                respetuoso con el medio ambiente, totalmente reciclable y
                auténtico. Le da a sus clientes una sensación sostenible y
                exclusiva al desembalar. Grandes beneficios, si nos pregunta.
              </p>
            </div>
          </div>
          <div className="mb-20 md:w-[50%]">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/maquinazunchos.JPG"
              alt="maquina-enzunchadora"
              className=""
            />
          </div>
        </div>
        <div className="md:flex md:gap-10 md:max-w-[1250px] md:m-auto md:mb-10">
          <div>
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              ¿El fleje de PET es más ecológico que el fleje de acero?
            </h2>
            <div className="mb-10">
              <p className="mb-5 md:text-lg">
                La respuesta es concisa: sí. La producción y la logística de los
                flejes de PET son mucho más respetuosas con el medio ambiente
                que las de los flejes de acero. En primer lugar, para la
                producción de flejes de acero se utilizan altos hornos que
                queman continuamente a altas temperaturas. Por otro lado, la
                producción y el reciclaje de flejes de PET es un proceso
                energéticamente eficiente. Además, los flejes de PET son cinco
                veces más ligeros que los de acero. Por lo tanto, se utilizan
                menos energía y combustibles fósiles en todos los movimientos
                logísticos de la cadena.
              </p>
              <p className="mb-5 md:text-lg">
                Los flejes de acero se fabrican a partir de mineral de hierro,
                que primero debe extraerse, con todos los procesos logísticos
                que ello conlleva. Una vez fabricados, los flejes de PET se
                reciclan constantemente. Y el sistema de depósito en los Países
                Bajos también contribuye al proceso de reciclaje respetuoso con
                el medio ambiente de los flejes de PET. Este sistema de depósito
                para botellas de PET se ha ampliado recientemente y seguirá
                desarrollándose en el futuro, lo que convierte a los flejes de
                PET en una solución a largo plazo.
              </p>
            </div>
          </div>
          <div className="mb-20">
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/rolloszunchos.jpg"
              alt="rollos-zunchos"
            />
          </div>
        </div>
        <div className="md:flex md:gap-10 md:max-w-[1250px] md:m-auto md:mb-20 md:flex-row-reverse">
          <div>
            <h2 className="text-textGray text-lg font-bold mb-6 md:text-3xl md:font-medium md:uppercase">
              Un dispositivo de flejado inteligente para un menor desgaste
            </h2>
            <div className="mb-10">
              <p className="mb-5 md:text-lg">
                Inteligentes, eficientes y de alta calidad. Estas son las
                palabras clave de nuestras máquinas flejadoras totalmente
                automáticas. Nuestros especialistas en I+D diseñan y desarrollan
                sistemas con un mínimo de piezas móviles. Además, los cabezales
                de flejado de estos sistemas suelen estar equipados con sistemas
                de limpieza. Todas estas propiedades garantizan un desgaste
                mínimo. Para el mantenimiento necesario, puede contar con un
                excelente servicio por nuestra parte.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/automaticstrapping.jpeg"
              alt="enzunchado-automatico"
            />
          </div>
        </div>
      </section>
      <section className="px-10 mb-10 md:max-w-[875px] md:m-auto">
        <div>
          <h2 className="text-textGray text-lg font-bold mb-6">
            Solución total para su proceso de embalaje
          </h2>
          <div className="mb-10">
            <p className="mb-5">
              En una primera reunión, haremos un balance de las operaciones
              comerciales en torno al flujo de mercancías que desea automatizar.
              Analizaremos las cargas, los flujos de procesos, la situación
              actual y, por supuesto, la situación deseada. A partir de aquí, le
              asesoraremos sobre el sistema óptimo, centrándonos en el espacio
              disponible y en la mejora máxima de la eficiencia. Por supuesto,
              pensaremos de forma innovadora y propondremos soluciones
              alternativas de forma proactiva. Para ello, colaboramos con varios
              integradores de sistemas fiables que se centran continuamente en
              ofrecer una alta calidad. Juntos, ofreceremos la solución total
              deseada.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-textGray text-lg font-bold mb-6">
            Todo es posible
          </h2>
          <div className="mb-10">
            <p className="mb-5">
              Tantas posibilidades, tantas máquinas flejadoras automáticas.
              Dependiendo totalmente del material, todos nuestros sistemas se
              pueden ampliar con diversas opciones como:
            </p>
            <ul className="flex flex-col gap-2 ml-5">
              <li>Flejado horizontal</li>
              <li>Flejado vertical</li>
              <li>
                Brazo robotizado para colocación de vigas de madera y/o
                cantoneras
              </li>
              <li>Sistemas de suministro de cantoneras</li>
              <li>Almacenes de vigas</li>
              <li>Platas giratorias para flejado cruzado</li>
              <li>Flejado paralelo</li>
              <li>Procesamiento de cinta de flejado Jumbo y Superjumbo</li>
              <li>
                Prensa vertical y/o horizontal para compresión y estabilización
                del paquete
              </li>
              <li>Máquina móvil para flejado en múltiples posiciones</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-textGray text-lg font-bold mb-6">
            FROMM: Todo en casa
          </h2>
          <div className="mb-10">
            <p className="mb-5">
              Empaque con una sonrisa. Para ello, hacemos todo lo posible, tanto
              en sentido literal como figurado. Desde ahorros inteligentes y las
              herramientas de flejado más eficientes hasta un servicio óptimo y
              contratos de mantenimiento favorables. Todo ello combinado con
              nuestra atención altamente personalizada, especialistas
              involucrados e innovaciones que realmente contribuyen a los
              resultados dentro de su empresa. Nuestros valores fundamentales
              son claros y distintivos.
            </p>
          </div>
        </div>
        {servicesData.map((service) => (
          <div key={service.id}>
            <div
              className="px-2 py-5 cursor-pointer flex justify-between items-center hover:bg-gray-100 transition-all duration-300 ease-in-out select-none font-medium text-lg text-textGray"
              onClick={() => handleAccordion(service.id)}
            >
              <p>{service.title}</p>
              {openAcordeon === service.id ? (
                <img src="/icons/minusIcon.svg" />
              ) : (
                <img src="/icons/plusIcon.svg" />
              )}
            </div>
            <div
              className={`border border-t-transparent border-l-transparent border-r-transparent border-b-black ${
                openAcordeon === service.id
                  ? "h-auto border border-b-black"
                  : "h-0"
              }`}
            >
              <p
                className={`px-3 py-5 ${
                  openAcordeon === service.id ? "visible" : "hidden"
                }`}
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-14">
          <h2 className="text-textGray text-lg font-bold mb-6">
            ALCANCE INTERNACIONAL
          </h2>
          <div className="mb-10">
            <p className="mb-5">
              FROMM es el socio experto en embalajes de final de línea con
              especial atención al flejado. Lo demostramos desde 1947 con
              nuestras innovaciones y soluciones patentadas. Y lo hacemos en
              todo el mundo. Como socio líder en el sector de las máquinas
              flejadoras, le ofrecemos conocimientos del más alto nivel.
            </p>
          </div>
        </div>
      </section>
      <section className="px-10 mb-10 md:max-w-[1250px] md:m-auto md:mb-20">
        <h2 className="text-textGray text-2xl font-semibold">PRODUCTOS</h2>
        <p className="mb-10">NUESTRAS SOLUCIONES</p>
        <FocusCards cards={productsCard} />
      </section>
    </>
  );
};
