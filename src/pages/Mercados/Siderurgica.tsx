import { ContactForm } from "../../components/ContactForm";
import { InfoBanner } from "../../components/InfoBanner";

export const Siderurgica = () => {
  return (
    <>
      <InfoBanner
        srcImg="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/metalindustry.webp"
        link=""
        category="MERCADO"
        title="INDUSTRIA SIDERURGICA"
        alt="Industria Siderurgica"
        desc=""
        sinBoton
      />
      <section className="mb-10 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Industria metalúrgica: plazos de entrega cortos, máquinas robustas
          </h3>
          <p className="text-justify">
            En la industria metalúrgica, se trabaja con plazos de entrega cortos
            para entregar los productos a tiempo al cliente. Las máquinas
            robustas de FROMM resisten bien las duras condiciones de trabajo.
            Nuestros flejes de alta calidad son fuertes, no se oxidan y
            garantizan que el acero se mantenga unido, sin importar lo pesada
            que sea la carga. Por eso, no en vano, FROMM tiene una buena
            presencia en la industria metalúrgica desde hace años.
          </p>
        </div>
      </section>
      <section className="mb-24 py-10">
        <div className="max-w-[75%] m-auto flex flex-col gap-5 lg:max-w-[60%] text-justify lg:font-light">
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Gran diversidad de formas de carga
          </h3>
          <p className="text-justify">
            En el metal se da una gran diversidad de formas de carga. Pueden ser
            perfiles largos o enormes rollos de acero. Pueden ser cargas muy
            pesadas o relativamente ligeras. En cualquier caso, se desea evitar
            la corrosión y la oxidación durante el transporte y el
            almacenamiento. El material de embalaje adecuado es esencial. Los
            flejes deben ser lo suficientemente resistentes y no deben oxidarse
            ni absorber humedad.
          </p>
          <h3 className="text-textGray font-semibold text-2xl text-left">
            Soluciones de embalaje ergonómicas para la industria siderurgica
          </h3>
          <p className="text-justify">
            Los especialistas de FROMM piensan junto con usted sobre las
            soluciones de embalaje más ergonómicas para la industria del metal.
            Dependiendo del presupuesto y la situación, ofrecemos soluciones
            semiautomáticas o totalmente automáticas. Además, pensamos junto con
            usted en:
          </p>
          <ul className="flex flex-col gap-5 my-5">
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>La gran diversidad de formas de carga;</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>Corrosión y oxidación del metal;</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>Peso de los productos;</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>Plazos de entrega cortos;</p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>
                La influencia del polvo de acero en las condiciones de trabajo;
              </p>
            </li>
            <li className="flex gap-2 items-start">
              <img src="/icons/checkList.svg" />
              <p>Seguridad y ergonomía de los empleados;</p>
            </li>
          </ul>
          <p className="text-justify">
            Nos aseguramos de que pueda lograr el resultado deseado con menos
            material de embalaje. Al hacerlo, innovamos todos los aspectos del
            proceso de embalaje. La sustitución del acero por zunchos de PET
            reduce el riesgo de lesiones al cortar un paquete bien flejado.
            Además, los zunchos de PET son infinitamente reciclables, lo que es
            bueno para el medio ambiente y para su bolsillo. Al cambiar de
            zunchos de acero a zunchos de PET, los grandes usuarios pueden
            ahorrar miles de pesos al año. Además, se obtienen ahorros
            adicionales gracias a un peso más ligero y un menor consumo. ¿Quiere
            saber qué podemos hacer por usted? ¡Estaremos encantados de
            planificar su período de amortización y sus ahorros!
          </p>
        </div>
      </section>
      <ContactForm
        titulo="¿Necesitas más información sobre nuestras soluciones de embalaje para la industria metalúrgica?"
        descripcion="Envianos un mensaje y nos pondremos en contacto contigo a la brevedad."
      />
    </>
  );
};
