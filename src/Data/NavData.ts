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
  { id: 1, name: "PRODUCTOS", link: "/productos", hasDropdown: false },
  {
    id: 2,
    name: "SOLUCIONES",
    link: "/soluciones",
    hasDropdown: true,
    submenu: [
      {
        id: 1,
        link: "/zunchos-herramientas",
        name: "ZUNCHOS Y HERRAMIENTAS",
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
  {
    id: 3,
    name: "MERCADOS",
    link: "/mercados",
    hasDropdown: true,
    submenu: [
      {
        id: 1,
        link: "/celulosa",
        name: "Celulosa",
      },
      {
        id: 2,
        link: "/mineria",
        name: "Minería",
      },
      {
        id: 3,
        link: "/Agricultura",
        name: "Agricultura",
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
        name: "Acerca de Nosotros",
      },
      {
        id: 1,
        link: "/politica-calidad",
        name: "Politica de Calidad",
      },
      // {
      //   id: 2,
      //   link: "/embalaje-ecofriendly",
      //   name: "Embalaje Ecofriendly",
      // },
      // {
      //   id: 3,
      //   link: "/organizacion-servicios",
      //   name: "Organización de servicios",
      // },
    ],
  },
  {
    id: 5,
    name: "SERVICIO TÉCNICO",
    link: "/servicio-tecnico",
    hasDropdown: false,
  },
];
