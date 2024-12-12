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
            {id: 1, title: 'Flejadoras', url: '/flejadoras'}
        ]
    },
    {
        id: 2,
        title: 'Servicio Técnico',
        url: '/servicio-tecnico',
        isDropdown: true, 
        dropDownItems: [
            {id: 1, title: 'Mantenimiento', url: '/mantenimiento'},
        ]
    },
    {
        id: 3,
        title: 'Consumibles',
        url: '/consumibles',
        isDropdown: true, 
        dropDownItems: [
            {id: 1, title: 'Zunchos', url: '/zunchos'},
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