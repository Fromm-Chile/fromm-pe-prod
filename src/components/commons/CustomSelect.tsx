export const CustomSelect = () => {
  return (
    <div className="relative w-[250px]">
      <select
        name=""
        id=""
        className="p-3 rounded-xl border-2 border-red w-full appearance-none"
      >
        <option value="">Tipo de Industria</option>
        <option value="concreto">Concreto</option>
        <option value="distribucion">Distribución</option>
        <option value="madereras">Madereras</option>
        <option value="mineria">Minería</option>
        <option value="Agricultura">Agricultura</option>
        <option value="Papeleras">Celulosa</option>
      </select>
      <div className="h-8 w-8 absolute right-[12px] top-3">
        <img src="/icons/chevronDown.svg" />
      </div>
    </div>
  );
};
