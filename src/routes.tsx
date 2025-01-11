import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { ServicioTecnico } from "./pages/servicioTecnico/ServicioTecnico";
import { Zunchos } from "./pages/zunchos/Zunchos";
import { Recursos } from "./pages/Recursos/Recursos";
import Airpads from "./pages/Airpads";
import { Contacto } from "./pages/Contacto";
import ScrollToTop from "./components/ScrollToTop";
import { MaquinasEnvolvedoras } from "./pages/maquinasEnvolvedoras/MaquinasEnvolvedoras";
import { Products } from "./pages/Products";

export const router = createBrowserRouter([
    {path: "/", element: <><ScrollToTop/><Layout /></> , children: [
        {path: "/", element: <Home />},
        {path: "/envolvedora", element: <MaquinasEnvolvedoras/>},
        {path: "/productos", element: <Products/>},
        {path: "/servicio-tecnico", element: <ServicioTecnico/>},
        {path: "/zunchos", element: <Zunchos/>}, 
        {path: "/recursos", element: <Recursos/>},
        {path: "/Airpads", element: <Airpads/>},
        {path: "/Contacto", element: <Contacto/>},
        { path: "*", element: <Navigate to="/" /> },   
]}
]);

