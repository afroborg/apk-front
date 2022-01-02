import React from 'react';
import { categories } from '../helpers/alcohol.helpers';
import Pill from './pill';

type Props = {
  activeCategory: string;
  onFilter: (c: string) => void;
};

const Filters: React.FC<Props> = ({ activeCategory, onFilter }) => {
  return (
    <div className="flex gap-4 overflow-auto pb-4">
      {categories.map((c) => (
        <Pill
          key={c}
          onChange={() => onFilter(c)}
          isActive={c === activeCategory}
        >
          <span className="font-medium">{c}</span>
        </Pill>
      ))}
    </div>
  );
};

export default Filters;
