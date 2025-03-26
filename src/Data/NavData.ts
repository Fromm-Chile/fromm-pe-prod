type Submenu = {
  id: number;
  link: string;
  name: string;
};

type NavbarDataType = {
  id: number;
  name: string;
  link: string;
  hasDropdown?: boolean;
  submenu?: Submenu[];
};

export const navbarData: NavbarDataType[] = [
  {
    id: 1,
    name: "SOLUCIONES",
    link: "/soluciones",
    hasDropdown: true,
    submenu: [
      {
        id: 1,
        link: "/zunchos-herramientas",
        name: "ZUNCHOS",
      },
      {
        id: 2,
        link: "/envolvedora",
        name: "ENVOLVEDORAS",
      },
      {
        id: 3,
        link: "/film-embalaje",
        name: "FILM DE EMBALAJE",
      },
      {
        id: 4,
        link: "/airpads",
        name: "AIRPADS",
      },
    ],
  },
  { id: 2, name: "PRODUCTOS", link: "/productos", hasDropdown: false },
  {
    id: 3,
    name: "MERCADOS",
    link: "/mercados",
    hasDropdown: true,
    submenu: [
      {
        id: 1,
        link: "/mineria",
        name: "MINERÍA",
      },
      {
        id: 2,
        link: "/forestal",
        name: "FORESTAL",
      },
      {
        id: 3,
        link: "/agricola",
        name: "AGRÍCOLA",
      },
      {
        id: 4,
        link: "/siderurgica",
        name: "SIDERÚRGICA",
      },
    ],
  },
  {
    id: 4,
    name: "NOSOTROS",
    link: "/nosotros",
    hasDropdown: true,
    submenu: [
      {
        id: 1,
        link: "/nosotros",
        name: "ACERCA DE NOSOTROS",
      },
      {
        id: 2,
        link: "/politica-calidad",
        name: "POLÍTICA DE CALIDAD",
      },
      {
        id: 3,
        link: "/codigo-etica",
        name: "CÓDIGO DE ÉTICA",
      },
    ],
  },
  {
    id: 5,
    name: "SERVICIO TÉCNICO",
    link: "/servicio-tecnico",
    hasDropdown: false,
  },
];
