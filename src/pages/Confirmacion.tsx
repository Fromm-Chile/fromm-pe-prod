import { useNavigate } from "react-router-dom";
import { Button } from "../components/commons/Button";

export const Confirmacion = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-primaryGray mb-20 pt-12 px-3 pb-5">
      <h2 className="text-center mb-10 text-xl md:text-4xl font-medium">
        SOLICITUD ENVIADA
      </h2>
      <div className="border border-black p-5 md:py-10 md:px-3 bg-white mb-10 md:max-w-[1150px] md:m-auto md:mb-10">
        <p className="text-center text-lg md:text-2xl text-textGray">
          Tu solicitud ha sido enviada con éxito, te contactaremos a la
          brevedad.
        </p>
      </div>
      <div className="flex justify-center">
        <Button
          link=""
          onClick={handleBackToHome}
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Volver al Inicio
        </Button>
      </div>
    </div>
  );
};
