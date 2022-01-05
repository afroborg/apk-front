import { IAlcohol } from '../models/IAlcohol';
import { IResponse } from '../models/IResponse';
import { getAsync } from './api.helpers';

export type FetchAlcoholOptions = {
  page: number | null;
  perPage: number | null;
  category: string | null;
  search: string | null;
};

export const fetchAlcohols = async (opts: FetchAlcoholOptions) =>
  getAsync<IResponse<IAlcohol[]>>('/alcohols', {
    query: {
      page: opts.page ?? 1,
      per_page: opts.perPage ?? 102,
      category: opts.category ?? '',
      search: opts.search ?? '',
    },
  });

export const categories = [
  'Öl',
  'Vin',
  'Cider & blanddrycker',
  'Sprit',
  'Alkoholfritt',
] as const;
