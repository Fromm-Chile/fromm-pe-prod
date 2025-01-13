type ProductsType = {
    id: number;
    slug: string;
    srcImg: string[];
    alt: string;
    category: string;
    subcategory: string;
    name: string;
    subtitle: string;
    desc: string;
    specifications: {
      key: string;
      value: string;
    }[];
    information: string;
    downloads: {
      name: string;
      link: string;
    }[];
    videos: string[];
  };
  
  export const products: ProductsType[] = [
    {
      id: 1,
      slug: "enzunchadoras-electricas", // unico por producto
      srcImg: [
        "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadoraelectrica.jpg",
        "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadora.jpg",
      ],
      alt: "enzunchadora-electrica",
      category: "ZUNCHOS",
      subcategory: "",
      name: "Enzunchadora a Bateria P328/P329",
      subtitle: "Equipamiento de última tecnología FROMM", // This should be a JSX.Element
      desc: `<p className="my-5">
            La FROMM P328 es una flejadora a batería para flejes de PET y PP y
            es adecuada para la mayoría de aplicaciones de flejado.
          </p>
          <p className="my-5">
            Con la FROMM p328 podrá flejar fácilmente todos los tamaños de
            flejes de polipropileno (PP) y poliéster (PET) hasta un ancho de 16
            mm.
          </p>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-center">
              <img src="/icons/checkList.svg" />
              <p>Carcasa resistente</p>
            </li>
            <li className="flex gap-2 items-center">
              <img src="/icons/checkList.svg" />
              <p>
                Muy bajo mantenimiento gracias al mínimo de piezas móviles y al
                motor sin escobillas
              </p>
            </li>
            <li className="flex gap-2 items-center">
              <img src="/icons/checkList.svg" />
              <p>Vida útil más larga</p>
            </li>
            <li className="flex gap-2 items-center">
              <img src="/icons/checkList.svg" />
              <p>Más ligero de usar gracias a su diseño inteligente</p>
            </li>
          </ul>`,
      specifications: [
        {
          key: "",
          value: "",
        },
        {
          key: "",
          value: "",
        },
      ],
      information: "<p><strong>Hola Mundo</strong></p>",
      downloads: [
        {
          name: "",
          link: "",
        },
      ],
      videos: [""],
    },
    {
      id: 2,
      slug: "enzunchadoras-manuales",
      srcImg: [
        "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadoramanual.jpeg",
      ],
      alt: "enzunchadora-manual",
      category: "ZUNCHOS",
      subcategory: "",
      name: "Enzunchadora para acero A333",
      subtitle: "Equipamiento de última tecnología FROMM",
      desc: "<p><strong>Hola Mundo</strong></p>",
      specifications: [
        {
          key: "",
          value: "",
        },
        {
          key: "",
          value: "",
        },
      ],
      information: "<p><strong>Hola Mundo</strong></p>",
      downloads: [
        {
          name: "",
          link: "",
        },
      ],
      videos: [""],
    },
    {
      id: 3,
      slug: "enzunchadoras-neumaticas",
      srcImg: [
        "https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/enzunchadoraneumatica.jpeg",
      ],
      alt: "enzunchadora-neumatica",
      category: "ZUNCHOS",
      subcategory: "",
      name: "Enzunchadora Neumática A380",
      subtitle: "Equipamiento de última tecnología FROMM",
      desc: "<p><strong>Hola Mundo</strong></p>",
      specifications: [
        {
          key: "",
          value: "",
        },
        {
          key: "",
          value: "",
        },
      ],
      information: "<p><strong>Hola Mundo</strong></p>",
      downloads: [
        {
          name: "",
          link: "",
        },
      ],
      videos: [""],
    },
  ];
  