type dropDownItems = {
    id: number;
    title: string;
    url: string;
}

type NavBarData = {
    id: number;
    title: string;
    url: string;
    isDropdown: boolean;
    dropDownItems?: dropDownItems[];
}

export const navBarData: NavBarData[] = [
    {
        id: 1,
        title: 'Maquinas y Herramientas',
        url: '/maquinas-y-herramientas',
        isDropdown: true,
        dropDownItems: [
            {id: 1, title: 'Herramientas de Enzunchado FROMM', url: '/heramientas-de-enzunchado'},
            {id: 2, title: 'Envolvedoras', url: '/envolvedoras'},
            {id: 3, title: 'Equipos de protección de carga', url: '/equipos-de-proteccion-de-carga'},
            {id: 4, title: 'Sistemas Automáticos de enzunchado', url: '/sisitemas-automaticos-de-enzunchado'},
            {id: 5, title: 'Accesorios de embalajes', url: '/accessorios-de-embalajes'}
        ]
    },
    {
        id: 2,
        title: 'Servicio Técnico',
        url: '/servicio-tecnico',
        isDropdown: true, 
        dropDownItems: [
            {id: 1, title: 'Servicio de reparación  de herramientas de Enzunchado', url: '/servicio-de-reparacion-de-herramientas-de-enzunchado'},
            {id: 2, title: 'Respuestos', url: '/respuestos'}
        ]
    },
    {
        id: 3,
        title: 'Zunchos',
        url: '/zunchos',
        isDropdown: true, 
        dropDownItems: [
            {id: 1, title: 'Zunchos de Poliéster ( PET )', url: '/zunchos-de-poliester'},
            {id: 2, title: 'Zunchos de Acero', url: '/zunchos-de-acero'},
            {id: 3, title: 'Zunchos de Polipropileno', url: '/zunchos-de-polipropileno'}
        ]
    },
    {
        id: 4,
        title: 'Recursos',
        url: '/recursos',
        isDropdown: true,
        dropDownItems: [
            {id: 1, title: 'Blog', url: '/blog'},
            {id: 2, title: 'Videos', url: '/videos'},
        ]
    },
    {
        id: 5,
        title: 'AirPads',
        url: '/airpads',
        isDropdown: false
    },
    {
        id: 6, 
        title: 'Contacto',
        url: '/contacto',
        isDropdown: false
    }
];