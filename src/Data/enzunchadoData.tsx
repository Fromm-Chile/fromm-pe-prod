import React from "react";

type ServiceData = {
  id: number;
  title: string;
  description: string;
};

export const servicesData: ServiceData[] = [
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

export const productsCard: ProductsCard[] = [
  {
    id: 1,
    src: "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/zunchoglassclose.jpeg",
    title: "Zunchos",
    link: "/zunchos-herramientas",
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

type HerramientasEnzunchado = {
  id: number;
  srcImg: string;
  alt: string;
  solution: string;
  product: string;
  desc: React.JSX.Element;
};

export const herramientasEnzunchado: HerramientasEnzunchado[] = [
  {
    id: 1,
    srcImg:
      "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadoraelectrica.jpg",
    alt: "enzunchadora-electrica",
    solution: "ZUNCHOS",
    product: "Enzunchadoras Eléctricas",
    desc: (
      <>
        <p className="text-textGray text-base font-light mb-3">
          Equipamiento de última tecnología FROMM para enzunchado manual
        </p>
        <ul className="text-textGray text-base font-light mb-3 flex flex-col gap-2">
          <li>Diseno inteligente para bajo mantenimiento</li>
          <li>El mejor equipo de enzunchado a nivel mundial</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    srcImg:
      "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadoramanual.jpeg",
    alt: "enzunchadora-electrica",
    solution: "ZUNCHOS",
    product: "Enzunchadoras Manuales",
    desc: (
      <>
        <p className="text-textGray text-base font-light mb-3">
          Equipamiento de última tecnología FROMM para enzunchado manual
        </p>
        <ul className="text-textGray text-base font-light mb-3 flex flex-col gap-2">
          <li>Diseno inteligente para bajo mantenimiento</li>
          <li>El mejor equipo de enzunchado a nivel mundial</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    srcImg:
      "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadoraneumatica.jpeg",
    alt: "enzunchadora-electrica",
    solution: "ZUNCHOS",
    product: "Enzunchadoras Neumáticas",
    desc: (
      <>
        <p className="text-textGray text-base font-light mb-3">
          Equipamiento de última tecnología FROMM para enzunchado manual
        </p>
        <ul className="text-textGray text-base font-light mb-3 flex flex-col gap-2">
          <li>Diseno inteligente para bajo mantenimiento</li>
          <li>El mejor equipo de enzunchado a nivel mundial</li>
        </ul>
      </>
    ),
  },
];
