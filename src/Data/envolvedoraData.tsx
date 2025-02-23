type Envolvedoras = {
  id: number;
  srcImg: string;
  alt: string;
  solution: string;
  product: string;
  desc?: React.JSX.Element;
  link: string;
};

export const envolvedoras: Envolvedoras[] = [
  {
    id: 1,
    srcImg: "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/FR300-1.webp",
    alt: "envolvedora-automatica",
    solution: "ENVOLVERDORAS",
    product: "Envolvedoras Automáticas",
    link: "/productos?categoryId=16",
  },
  {
    id: 2,
    srcImg:
      "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/FS360foto1.jpg",
    alt: "envolvedora-de-pilar",
    solution: "ENVOLVERDORAS",
    product: "Envolvedoras de Pilar",
    link: "/productos?categoryId=17",
  },
  {
    id: 3,
    srcImg:
      "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/FV300foto1.jpg",
    alt: "envolvedora-de-tunel",
    solution: "ENVOLVERDORAS",
    product: "Envolverdoras de Tunel",
    link: "/productos?categoryId=18",
  },
];
