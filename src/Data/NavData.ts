type Submenu = {
    id: number;
    link: string;
    name: string;
  }
  
  type NavbarDataType = {
    id: number
    name: string;
    link: string;
    hasDropdown?: boolean;
    submenu?: Submenu[];
  };
  
  export const navbarData: NavbarDataType[] = [
    { id: 1, name: "SOLUCIONES", link: "/", hasDropdown: true, submenu: [
      {
        id: 1,
        link: "/zunchos",
        name: "ZUNCHOS",

      },
      {
        id: 2,
        link: "/envolvedora",
        name: "ENVOLVEDORAS",
      },
      {
        id: 3,
        link: "/airpads",
        name: "AIRPADS",
      },
      {
        id: 4,
        link: "/accesorios-embalaje",
        name: "ACCESORIOS DE EMBALAJE",
      },
      {
        id: 5,
        link: "/herramientas-apoyo",
        name: "HERRAMIENTAS DE APOYO",
      },
      {
        id: 6,
        link: "/maquinas-herramientas",
        name: "MÁQUINAS Y HERRAMIENTAS",
      },
      {
        id: 7,
        link: "/sis-embalaje",
        name: "SISTEMAS DE EMBALAJE",
      },
    ]},
    { id: 2, name: "PRODUCTOS", link: "/productos", hasDropdown: false },
    { id: 3, name: "MERCADOS", link: "/", hasDropdown: true, submenu: [
      {
        id: 1,
        link: "/mineria",
        name: "MINERÍA",

      },
    ] },
    { id: 4, name: "NOSOTROS", link: "/", hasDropdown: true, submenu: [
      {
        id: 1,
        link: "/nosotros",
        name: "Acerca de Nosotros",
      },
    ] },
    { id: 5, name: "NOTICIAS", link: "/", hasDropdown: false },
  ];