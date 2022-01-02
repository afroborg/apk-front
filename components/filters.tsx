import React, { useState } from 'react';
import Pill from './pill';

type Props = {
  activeCategory: string;
};

const categories = ['Allt', 'Öl', 'Vin', 'Cider & blanddrycker', 'Sprit'];

const Filters: React.FC<Props> = ({ activeCategory }) => {
  const [category, setCategory] = useState(activeCategory);

  return (
    <div className="flex gap-4 overflow-auto pb-4">
      {categories.map((c) => (
        <Pill
          key={c}
          onChange={() => {
            setCategory(c);
          }}
          isActive={c === category}
        >
          <span className="font-medium">{c}</span>
        </Pill>
      ))}
    </div>
  );
};

export default Filters;
