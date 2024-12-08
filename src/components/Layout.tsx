import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer className="bg-[#f2f2f2] py-10">
        <div className="mx-5 pt-8">
          <div>
            <h4 className="font-medium mb-2">FROMM Group</h4>
            <p className="font-light text-sm mb-5">
              Especializados en sistemas de embalaje, ofrece una gama diversa:
              flejadoras, envolvedoras, robots; con flejes de acero, poliéster,
              polipropileno, y el innovador sistema de protección Airpad.
            </p>
          </div>
          <div>
            <h4 className="font-medium my-2">Nuestros Productos</h4>
            <ul className="font-light text-sm mb-5">
              <li>Flejado (fleje acero, fleje plástico)</li>
              <li>Enfardado en film.</li>
              <li>Producto de protección y relleno</li>
              <li>Automáticas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium my-2">Mapa del sitio</h4>
            <ul className="font-light text-sm mb-5">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/">Nosotros</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contacto</Link>
              </li>
              <li>
                <Link to="/">Aviso legal</Link>
              </li>
              <li>
                <Link to="/">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/">Políticas de cookies</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium my-2">Contáctanos</h4>
            <ul className="font-light text-sm mb-5">
              <li>(+56) 2 2571 1100</li>
              <li></li>
              <li>
                <a href="mailto:contacto@fromm-pack.cl">
                  contacto@fromm-pack.cl
                </a>
              </li>
              <li>
                <Link to="/">Quilicura</Link>
              </li>
            </ul>
          </div>
          <div className="border-t-2 py-2">
            FROMM - Diseñado por David Sistemas - Copyright ©2024
          </div>
        </div>
      </footer>
    </>
  );
};
