import React from 'react';
import { IAlcohol } from '../models/IAlcohol';
import Alcohol from './alcohol';

type Props = {
  alcohols: IAlcohol[];
};

const AlcoholGrid: React.FC<Props> = ({ alcohols }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {alcohols.map((alcohol) => (
        <Alcohol {...alcohol} key={alcohol.id} />
      ))}
    </div>
  );
};

export default AlcoholGrid;
