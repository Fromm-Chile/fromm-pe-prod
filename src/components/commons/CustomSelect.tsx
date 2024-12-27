
import { useState, useRef } from 'react';

export const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-[300px]" ref={selectRef}>
      <div
        className="p-3 rounded-xl border-2 border-red w-full bg-white cursor-pointer flex justify-between items-center"
        onClick={handleToggle}
      >
        <span>{selectedOption || 'Tipo de Industria'}</span>
        <div className="h-8 w-8">
        <img src="/icons/chevronDown.svg" />
        </div>
      </div>
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white border-2 border-red rounded-xl mt-1 z-10">
          <li
            className="p-3 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleOptionClick('Concreto')}
          >
            Concreto
          </li>
          <li
            className="p-3 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleOptionClick('Distribución')}
          >
            Distribución
          </li>
          <li
            className="p-3 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleOptionClick('Madereras')}
          >
            Madereras
          </li>
          <li
            className="p-3 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleOptionClick('Minería')}
          >
            Minería
          </li>
          <li
            className="p-3 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleOptionClick('Agricultura')}
          >
            Agricultura
          </li>
          <li
            className="p-3 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleOptionClick('Celulosa')}
          >
            Celulosa
          </li>
        </ul>
      )}
    </div>
  );
};
