import React from 'react';
import { categories } from '../helpers/alcohol.helpers';
import Pill from './pill';

type Props = {
  activeCategory: string | null;
  onFilter: (c: string | null) => void;
};

const Filters: React.FC<Props> = ({ activeCategory, onFilter }) => {
  const handleFilter = (category: string) => () => {
    if (category === activeCategory) {
      onFilter(null);
      return;
    }

    onFilter(category);
  };

  return (
    <div className="flex gap-4 overflow-auto pb-4">
      {categories.map((c) => (
        <Pill
          key={c}
          onChange={handleFilter(c)}
          isActive={c === activeCategory}
        >
          <span className="font-medium">{c}</span>
        </Pill>
      ))}
    </div>
  );
};

export default Filters;
