type Submenu = {
    id: number;
    link: string;
    name: string;
  }
  
  type NavbarDataType = {
    name: string;
    link: string;
    hasDropdown?: boolean;
    submenu?: Submenu[];
  };
  
  export const navbarData: NavbarDataType[] = [
    { name: "SOLUCIONES", link: "/", hasDropdown: true, submenu: [
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
    { name: "PRODUCTOS", link: "/", hasDropdown: false },
    { name: "MERCADOS", link: "/", hasDropdown: true, submenu: [
      {
        id: 1,
        link: "/mineria",
        name: "MINERÍA",

      },
    ] },
    { name: "NOSOTROS", link: "/", hasDropdown: true, submenu: [
      {
        id: 1,
        link: "/nosotros",
        name: "Acerca de Nosotros",
      },
    ] },
    { name: "NOTICIAS", link: "/", hasDropdown: false },
  ];