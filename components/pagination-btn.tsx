import React from 'react';

type Props = {
  isActive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const PaginationBtn: React.FC<Props> = ({
  isActive = false,
  disabled = false,
  children,
}) => {
  return (
    <button
      className={`w-10 h-10 rounded-full flex items-center justify-center 
	  ${isActive ? 'bg-slate-700 text-white' : 'bg-slate-300'}
	  ${disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer'}`}
    >
      {children}
    </button>
  );
};

export default PaginationBtn;
