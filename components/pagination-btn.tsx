import React from 'react';

type Props = {
  isActive?: boolean;
  disabled?: boolean;
  label: string;
  onClick?: () => void;
};

const PaginationBtn: React.FC<Props> = ({
  isActive = false,
  disabled = false,
  label,
  onClick,
  children,
}) => {
  return (
    <button
      aria-label={label}
      className={`w-10 h-10 rounded-full flex items-center justify-center 
	  ${isActive ? 'bg-slate-700 text-white' : 'bg-slate-300'}
	  ${disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PaginationBtn;
