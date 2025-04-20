import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextareaController } from "../components/TextareaController";
import { useNavigate } from "react-router-dom";
import { InputController } from "./InputController";
import { Button } from "./commons/Button";
import { useState } from "react";
import { apiUrl } from "../assets/variables";
import axios from "axios";
import { Loader } from "./Loader";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  equipment: string;
  company?: string;
  message: string;
};

type ServiceFormProps = {
  titulo: string;
  descripcion: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Nombre es requerido"),
  email: yup.string().email().required("Correo es requerido"),
  phone: yup.string(),
  equipment: yup.string().required("Tipo de Máquina es requerido"),
  company: yup.string().required("El nombre de la Empresa es requerido"),
  message: yup.string().required("Mensaje es requerido"),
});

export const ServiceForm = ({ titulo, descripcion }: ServiceFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      await axios(`${apiUrl}/pe/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          ...data,
          contactType: "SERVICE",
        },
      });
      navigate("/confirmacion");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mb-20 pt-12 px-0 pb-5">
          <div className="bg-primaryGray p-5 md:px-20 md:py-5 md:max-w-[1350px] md:m-auto md:flex md:flex-row-reverse md:justify-between md:items-center">
            <div className="md:grid md:grid-cols-1 md:gap-0 my-10 mb-14 md:w-[80%]">
              <div>
                <h2 className="text-left text-textGray mb-3 text-3xl md:text-4xl font-bold uppercase mt-5">
                  {titulo}
                </h2>
                <p className="text-left font-xl text-textGray font-light mb-5">
                  {descripcion}
                </p>
              </div>
              <InputController
                control={control}
                name="name"
                placeholder="Nombre*"
                error={errors.name?.message}
              />
              <InputController
                control={control}
                name="email"
                placeholder="Correo*"
                error={errors.email?.message}
              />
              <InputController
                control={control}
                name="phone"
                placeholder="Teléfono"
              />
              <InputController
                control={control}
                name="equipment"
                placeholder="Tipo de Máquina*"
                error={errors.equipment?.message}
              />
              <InputController
                control={control}
                name="company"
                placeholder="Empresa*"
                error={errors.company?.message}
              />
              <TextareaController
                control={control}
                name="message"
                placeholder="Mensaje*"
                error={errors.message?.message}
              />
              <div className="flex justify-center">
                <Button
                  className="border border-black text-textGray font-bold uppercase"
                  link=""
                  whiteButton
                  onClick={handleSubmit(onSubmit)}
                >
                  ENVIAR
                </Button>
              </div>
            </div>
            <div className="px-6 py-2 mt-8 rounded-lg max-w-[90%] md:w-[50%]">
              <div className="w-[200px] h-[200px] m-auto md:w-[300px] md:h-[300px] md:mb-10">
                <img src="https://pub-873e7884cc3b416fa7c9d881d5d16822.r2.dev/servicio.png" />
              </div>
              <div className="flex items-center justify-start gap-4 mb-2">
                <img src="/icons/Layout/phone.svg" height={30} width={30} />
                <p className="text-textGray font-light">(01) 7430272</p>
              </div>
              <div className="flex items-center justify-start gap-4 mb-2">
                <img src="/icons/Layout/mail.svg" height={30} width={30} />
                <a
                  href="mailto:contacto@fromm-pack.pe"
                  className="text-textGray font-light hover:underline hover:font-bold transition-hover duration-300 ease-linear"
                >
                  contacto@fromm-pack.pe
                </a>
              </div>
              <div className="flex items-center justify-start gap-4 mb-2">
                <img src="/icons/instantmessage.svg" height={30} width={30} />
                <a
                  href="https://api.whatsapp.com/send?phone=51981318730"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-textGray font-light hover:underline hover:font-bold transition-hover duration-300 ease-linear">
                    Nuestro Whatsapp
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
