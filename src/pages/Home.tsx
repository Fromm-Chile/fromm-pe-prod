import { Link } from "react-router-dom";
import { Button } from "../components/commons/Button";
import { HomeCard } from "../components/HomeCard";
import { CustomSelect } from "../components/commons/CustomSelect";

export const Home = () => {
  return (
    <>
      <section>
        <div className="relative">
          <img
            src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/homeFoto.jpeg"
            alt="home-picture"
            className="w-full h-[450px] object-cover lg:hidden"
          />
          <video
            src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/fromm-chile.mp4"
            className="hidden lg:block w-full h-[450px] object-cover -z-10"
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute z-50 bg-[#E52D38] mix-blend-multiply h-10 w-full bottom-0 lg:bottom-[-1rem] lg:w-[40%] lg:h-[300px] lg:left-16"></div>
          <div className="hidden lg:block absolute z-50 h-10 w-full bottom-0 lg:w-[40%] lg:h-[300px] lg:left-16">
            <div className="flex flex-col items-center justify-start mt-14 h-full">
              <h2 className="text-white font-bold lg:text-[20px] xl:text-[26px]">
                FROMM CHILE
              </h2>
              <p className="text-white font-extralight lg:text-[20px] xl:text-[26px]">
                EMBALAJE CON INNOVACIÓN Y PRECISIÓN
              </p>
            </div>
            <ul className="flex gap-4 absolute bottom-4 left-0 p-8 text-white">
              <li className="group">
                <Link
                  className="flex items-center gap-2"
                  to="/zunchos-herramientas"
                >
                  <img
                    className="transition-transform duration-300 group-hover:-translate-x-2"
                    src="/icons/chevronRight.svg"
                  />
                  <div>
                    <h3 className="font-medium text-white text-xs">
                      SOLUCIONES
                    </h3>
                    <p className="text-white font-bold text-sm xl:text-base">
                      ZUNCHOS
                    </p>
                  </div>
                </Link>
              </li>
              <li className="group">
                <Link className="flex items-center gap-2" to="/heramientas">
                  <img
                    className="transition-transform duration-300 group-hover:-translate-x-2"
                    src="/icons/chevronRight.svg"
                  />

                  <div>
                    <h3 className="font-medium text-white text-xs">
                      SOLUCIONES
                    </h3>
                    <p className="text-white font-bold xl:text-base">
                      HERRAMIENTAS
                    </p>
                  </div>
                </Link>
              </li>
              <li className="group">
                <Link
                  className="flex items-center gap-2"
                  to="/zunchos-herramientas"
                >
                  <img
                    className="transition-transform duration-300 group-hover:-translate-x-2"
                    src="/icons/chevronRight.svg"
                  />
                  <div>
                    <h3 className="font-medium text-white text-xs">
                      SOLUCIONES
                    </h3>
                    <p className="text-white font-bold text-sm xl:text-base">
                      SERVICIO TECNICO
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-red text-white flex flex-col items-start p-8 lg:hidden">
          <h1 className="text-[26px] font-bold">FROMM CHILE</h1>
          <h2 className="text-[26px] font-extralight mb-8">
            EMBALAJE CON INNOVACIÓN Y PRECISIÓN
          </h2>
          <ul className="flex flex-col gap-4">
            <li className="group">
              <Link
                className="flex items-center gap-4"
                to="/zunchos-herramientas"
              >
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
              <Link
                className="flex items-center gap-4"
                to="/zunchos-herramientas"
              >
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
        <section className="relative">
          {/* <div className="shadow-2xl rounded-lg mx-8 my-16 p-8 bg-white z-10 absolute top-[-300px] lg:absolute lg:top-[-143px] lg:w-[95%] lg:mx-0 lg:right-7 lg:flex lg:justify-between lg:items-center">
            <h2 className="text-center mb-8 mt-3 font-bold text-xl lg:text-2xl lg:mb-0">
              QUÉ ESTAS BUSCANDO?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <NavButton link="/zunchos-herramientas">ZUNCHOS</NavButton>
              <NavButton link="/zunchos-herramientas">SERVICIO</NavButton>
              <NavButton link="/zunchos-herramientas">MI INDUSTRIA</NavButton>
              <NavButton link="/zunchos-herramientas">COTIZAR</NavButton>
              <NavButton link="/zunchos-herramientas">TRABAJO</NavButton>
            </div>
          </div> */}
          <div className="bg-primaryGray px-8 pt-[100px] lg:pt-24 w-full lg:mt-0 pb-20 lg:flex xl:gap-16">
            <div className="md:w-[45%]">
              <p className="font-extralight text-xl text-red tracking-widest">
                BIENVENIDO!
              </p>
              <p className="text-2xl font-bold text-textGray">FROMM CHILE</p>
              <p className="text-2xl font-extralight text-textGray">
                TRANSFORMAMOS EL EMBAJALE EN UNA EXPERIENCIA
              </p>
            </div>
            <div className="flex flex-col gap-8 justify-center items-center lg:flex-col-reverse lg:w-[50%]">
              <img
                className="border-b-2 border-black lg:h-36"
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
          </div>
          <Button link="/" className="mb-12 mt-[-28px] w-[170px] m-auto">
            CONTACTANOS
          </Button>
        </section>
        <HomeCard />
        <div className="flex justify-center mb-24">
          <Button link="/productos">VER TODOS LOS PRODUCTOS</Button>
        </div>
        <section className="bg-primaryGray mb-24 py-10">
          <div className="max-w-[75%] m-auto flex flex-col gap-5">
            <h3 className="font-extralight text-xl text-red tracking-widest">
              INDUSTRIAS
            </h3>
            <p className="text-textGray font-semibold text-2xl">
              ENTREGAMOS LA SOLUCION PERFECTA PARA CADA MERCADO
            </p>
            <p>
              Desde la industria del hormigón hasta los centros de distribución
              y desde la madera hasta la industria agrícola. Ofrecemos la
              solución perfecta para su empresa. Sea cual sea el mercado en el
              que esté activo. Nuestros especialistas estarán encantados de
              pensar junto con usted en las soluciones de embalaje más
              ergonómicas. Piense en materiales de embalaje resistentes, flejes
              reciclables y máquinas de alta calidad. Por supuesto, totalmente
              adaptadas a sus deseos, presupuesto y situación.
            </p>
            <CustomSelect />
          </div>
        </section>
        <section className="mb-24 py-10">
          <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] lg:text-center lg:font-light">
            <h3 className="text-textGray font-semibold text-2xl">
              ESPECIALISTAS EN SOLUCIONES DE EMBALAJE
            </h3>
            <p>
              Somos FROMM, especialistas en soluciones de embalaje. Desde
              nuestra sede central en Suiza, nuestros especialistas trabajan día
              y noche para conseguir los mejores productos posibles. Para
              asegurar, envolver, rellenar y proteger. Una cosa es cierta: nos
              aseguramos de que sus productos se empaqueten de forma segura. Lo
              hacemos con máquinas y consumibles de alta calidad. Con plazos de
              entrega rápidos y atención personalizada. Y con bajos costes de
              embalaje y acceso a un servicio de primera. FROMM no húye a los
              desafíos. Los afrontamos con ambas manos. Trabajamos en estrecha
              colaboración con usted para lograr una solución de embalaje óptima
              al final de la línea. ¿Tiene tiempo libre?
            </p>
          </div>
        </section>
      </main>
    </>
  );
};
