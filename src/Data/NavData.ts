type Submenu = {
    id: number;
    link: string;
    name: string;
    hasSubmenu: boolean;
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
        hasSubmenu: false,
      },
      {
        id: 2,
        link: "/envolvedora",
        name: "ENVOLVEDORA",
        hasSubmenu: true,
      },
      {
        id: 3,
        link: "/airpads",
        name: "AIRPADS",
        hasSubmenu: true,
      },
    ]},
    { name: "PRODUCTOS", link: "/", hasDropdown: false },
    { name: "MERCADOS", link: "/", hasDropdown: true, submenu: [
      {
        id: 1,
        link: "/mineria",
        name: "MINERÍA",
        hasSubmenu: false,
      },
    ] },
    { name: "NOSOTROS", link: "/", hasDropdown: true, submenu: [
      {
        id: 1,
        link: "/nosotros",
        name: "Acerca de Nosotros",
        hasSubmenu: false,
      },
    ] },
    { name: "NOTICIAS", link: "/", hasDropdown: false },
  ];