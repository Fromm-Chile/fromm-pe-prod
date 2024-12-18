import { Link } from "react-router-dom";
import { NavButton } from "../components/NavButton";
import { Button } from "../components/commons/Button";

export const Home = () => {
  return (
    <>
      <section>
        <div className="relative">
          <img
            src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/homeFoto.jpeg"
            alt="home-picture"
          />
          <div className="absolute z-0 bg-[#E52D38] mix-blend-multiply h-10 w-full bottom-0"></div>
        </div>
        <div className="bg-red text-white flex flex-col items-start p-8">
          <h1 className="text-[26px] font-bold">FROMM CHILE</h1>
          <h2 className="text-[26px] font-extralight mb-8">
            EMBALAJE CON INNOVACIÓN Y PRECISIÓN
          </h2>
          <ul className="flex flex-col gap-4">
            <li className="group">
              <Link className="flex items-center gap-4" to="/zunchos">
                <img
                  className="transition-transform duration-300 group-hover:-translate-x-2"
                  src="/icons/chevronRight.svg"
                />
                <div>
                  <h3 className="font-medium text-textGray">SOLUCIONES</h3>
                  <p>ZUNCHOS</p>
                </div>
              </Link>
            </li>
            <li className="group">
              <Link className="flex items-center gap-4" to="/heramientas">
                <img
                  className="transition-transform duration-300 group-hover:-translate-x-2"
                  src="/icons/chevronRight.svg"
                />

                <div>
                  <h3 className="font-medium text-textGray">SOLUCIONES</h3>
                  <p>HERRAMIENTAS</p>
                </div>
              </Link>
            </li>
            <li className="group">
              <Link className="flex items-center gap-4" to="/zunchos">
                <img
                  className="transition-transform duration-300 group-hover:-translate-x-2"
                  src="/icons/chevronRight.svg"
                />
                <div>
                  <h3 className="font-medium text-textGray">SOLUCIONES</h3>
                  <p>SERVICIO TECNICO</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <main>
        <div className="relative">
          <div className="shadow-2xl rounded-lg mx-8 my-16 p-8 bg-white z-0 absolute bottom-[600px]">
            <h2 className="text-center mb-8 mt-3 font-bold text-xl">
              QUÉ ESTAS BUSCANDO?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <NavButton link="/zunchos">ZUNCHOS</NavButton>
              <NavButton link="/zunchos">SERVICIO</NavButton>
              <NavButton link="/zunchos">MI INDUSTRIA</NavButton>
              <NavButton link="/zunchos">COTIZAR</NavButton>
              <NavButton link="/zunchos">TRABAJO</NavButton>
            </div>
          </div>
          <div className="bg-primaryGray px-8 pt-[300px] w-full mb-8 mt-[250px] relative pb-20">
            <p className="font-extralight text-xl text-red tracking-widest">
              BIENVENIDO!
            </p>
            <p className="text-2xl font-bold text-textGray">FROMM CHILE</p>
            <p className="text-2xl font-extralight text-textGray">
              TRANSFORMAMOS EL EMBAJALE EN UNA EXPERIENCIA
            </p>
            <div className="flex flex-col gap-8 justify-center items-center">
              <img
                className="border-b-2 border-black"
                src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/equipoFromm.webp"
                alt="fromm-team"
              />
              <p className="font-extralight text-lg text-textGray">
                El grupo FROMM desarrolla y fabrica diferentes sistemas de
                embalaje, para asegurar las mercancías: Máquinas flejadoras e
                instalaciones de flejado, envolvedoras de film estirable, robots
                envolvedor, flejes de acero, flejes de poliéster, flejes de
                polipropileno y el sistema patentado Airpad de protección y
                relleno.
              </p>
            </div>
            <Button link="/" className="absolute bottom-[-25px] left-[87px]">CONTACTANOS</Button>
          </div>
        </div>
      </main>
    </>
  );
};
