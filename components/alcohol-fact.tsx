import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  value: string | number;
  suffix: string;
  icon: IconType;
  bgColor: string;
  textColor?: string;
};

const AlcoholFact: React.FC<Props> = ({
  value,
  suffix,
  icon: Icon,
  bgColor,
  textColor = 'text-white',
}) => {
  const getValue = () => {
    if (typeof value === 'number') {
      return value.toFixed(2).replace('.', ',');
    }

    return value;
  };

  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-md w-[fit-content] ${bgColor} ${textColor}`}
    >
      <Icon className="" />
      <p>
        <span className="font-medium">{getValue()}</span>{' '}
        <span className="text-xs">{suffix}</span>
      </p>
    </div>
  );
};

export default AlcoholFact;
