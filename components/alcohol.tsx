import React from 'react';
import { IconType } from 'react-icons';
import { BsEmojiDizzy } from 'react-icons/bs';
import { CgGlassAlt } from 'react-icons/cg';
import { FiShoppingCart } from 'react-icons/fi';
import { GiGlassShot, GiWaterBottle, GiWineBottle } from 'react-icons/gi';
import { IoBeerOutline, IoResize, IoWaterOutline } from 'react-icons/io5';
import { IAlcohol } from '../models/IAlcohol';
import AlcoholFact from './alcohol-fact';

const icons: Record<string, { icon: IconType; color: string }> = {
  Öl: {
    icon: IoBeerOutline,
    color: 'bg-emerald-400',
  },
  Vin: {
    icon: GiWineBottle,
    color: 'bg-violet-700',
  },
  'Cider & blanddrycker': {
    icon: GiWaterBottle,
    color: 'bg-orange-400',
  },
  Sprit: {
    icon: GiGlassShot,
    color: 'bg-red-400',
  },
  Alkoholfritt: {
    icon: IoWaterOutline,
    color: 'bg-sky-400',
  },
};

const Alcohol: React.FC<IAlcohol> = ({
  link,
  name,
  price,
  volume,
  category,
  apk,
}) => {
  const icon = icons[category] ?? {
    icon: CgGlassAlt,
    color: 'bg-lime-400',
  };

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="p-4 bg-white rounded-sm shadow-sm transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md md:p-6">
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`${icon.color} w-12 h-12 flex items-center justify-center rounded-md shadow-sm text-white text-xl`}
            title={category}
          >
            <icon.icon />
          </div>

          <p className="font-semibold">{name}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <AlcoholFact
            icon={BsEmojiDizzy}
            value={apk}
            suffix="mlAPK"
            textColor="text-white"
            bgColor="bg-slate-600"
          />

          <AlcoholFact
            icon={IoResize}
            value={volume}
            suffix="ml"
            textColor="text-black"
            bgColor="bg-slate-200"
          />

          <AlcoholFact
            icon={FiShoppingCart}
            value={price}
            suffix="SEK"
            textColor="text-black"
            bgColor="bg-slate-200"
          />
        </div>
      </div>
    </a>
  );
};

export default Alcohol;
