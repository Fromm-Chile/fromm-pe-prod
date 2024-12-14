import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { MaquinasHerramientas } from "./pages/maquinasHerramientas/MaquinasHerramientas";
import { ServicioTecnico } from "./pages/servicioTecnico/ServicioTecnico";
import { Zunchos } from "./pages/zunchos/Zunchos";
import { Recursos } from "./pages/Recursos/Recursos";
import Airpads from "./pages/Airpads";
import { Contacto } from "./pages/Contacto";

export const router = createBrowserRouter([
    {path: "/", element: <Layout />, children: [
        {path: "/", element: <Home />},
        {path: "/maquinas-y-herramientas", element: <MaquinasHerramientas/>},
        {path: "/servicio-tecnico", element: <ServicioTecnico/>},
        {path: "/zunchos", element: <Zunchos/>}, 
        {path: "/recursos", element: <Recursos/>},
        {path: "/Airpads", element: <Airpads/>},
        {path: "/Contacto", element: <Contacto/>},
        { path: "*", element: <Navigate to="/" /> },   
]}
]);

