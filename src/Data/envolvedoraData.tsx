type Envolvedoras = {
  id: number;
  srcImg: string;
  alt: string;
  solution: string;
  product: string;
  desc: React.JSX.Element;
};

export const envolvedoras: Envolvedoras[] = [
  {
    id: 1,
    srcImg:
      "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/envolvedora.jpeg",
    alt: "envolvedora-automatica",
    solution: "ENVOLVERDORAS",
    product: "Envolvedoras Automáticas",
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
      "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/envolvedora.jpeg",
    alt: "envolvedora-de-pilar",
    solution: "ENVOLVERDORAS",
    product: "Envolvedoras de Pilar",
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
      "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/envolvedora.jpeg",
    alt: "envolvedora-de-tunel",
    solution: "ENVOLVERDORAS",
    product: "Envolverdoras de Tunel",
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
