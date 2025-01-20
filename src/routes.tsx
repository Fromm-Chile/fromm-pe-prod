import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { ServicioTecnico } from "./pages/ServicioTecnico";
import { Zunchos } from "./pages/Zunchos";
import { Recursos } from "./pages/Recursos";
import Airpads from "./pages/Airpads";
import { Contacto } from "./pages/Contacto";
import ScrollToTop from "./components/ScrollToTop";
import { MaquinasEnvolvedoras } from "./pages/MaquinasEnvolvedoras";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { FilmEmbalaje } from "./pages/FilmEmbalaje";
import { AboutUs } from "./pages/AboutUs";
import { EmbalajeEco } from "./pages/EmbalajeEco";
import { OrganizacionServicios } from "./pages/OrganizacionServicios";
import { Markets } from "./pages/Markets";
import { Solutions } from "./pages/Solutions";
import { News } from "./pages/News";

export const router = createBrowserRouter([
    {path: "/", element: <><ScrollToTop/><Layout /></> , children: [
        {path: "/", element: <Home />},
        {path: "/soluciones", element: <Solutions />},
        {path: "/envolvedora", element: <MaquinasEnvolvedoras/>},
        {path: "/film-embalaje", element: <FilmEmbalaje />}, 
        {path: "/productos", element: <Products/>},
        {path: "/productos/:slug", element: <ProductDetails />},
        {path: "/servicio-tecnico", element: <ServicioTecnico/>},
        {path: "/zunchos-herramientas", element: <Zunchos/>}, 
        {path: "/recursos", element: <Recursos/>},
        {path: "/Airpads", element: <Airpads/>},
        {path: "/mercados", element: <Markets/>},
        {path: "/nosotros", element: <AboutUs/>},
        {path: "/embalaje-ecofriendly", element: <EmbalajeEco />},
        {path: "/organizacion-servicios", element: <OrganizacionServicios/>},
        {path: "/Contacto", element: <Contacto/>},
        {path: "/noticias", element: <News/>},
        { path: "*", element: <Navigate to="/" /> },   
]}
]);

