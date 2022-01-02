import React from 'react';

type Props = {
  onChange: () => void;
  isActive?: boolean;
};

const Pill: React.FC<Props> = ({ onChange, isActive = false, children }) => {
  return (
    <button
      className={`rounded-full py-1 px-6 flex-shrink-0 ${
        isActive ? 'bg-slate-700 text-white' : 'bg-slate-300'
      }`}
      onClick={onChange}
    >
      {children}
    </button>
  );
};

export default Pill;
