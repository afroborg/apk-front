import { IAlcohol } from '../models/IAlcohol';
import { IResponse } from '../models/IResponse';
import { getAsync } from './api.helpers';

export type FetchAlcoholOptions = {
  page?: number;
  perPage?: number;
  category?: string;
};

export const fetchAlcohols = async (opts: FetchAlcoholOptions) =>
  getAsync<IResponse<IAlcohol[]>>('/alcohols', {
    query: {
      page: opts.page ?? 1,
      per_page: opts.perPage ?? 102,
      category: opts.category ?? '',
    },
  });

export const categories = [
  'Allt',
  'Öl',
  'Vin',
  'Cider & blanddrycker',
  'Sprit',
  'Alkoholfritt',
] as const;
