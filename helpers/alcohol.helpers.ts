import { IAlcohol } from '../models/IAlcohol';
import { IResponse } from '../models/IResponse';
import { getAsync } from './api.helpers';

export type FetchAlcoholOptions = {
  page: number | null;
  perPage: number | null;
  category: string | null;
  search: string | null;
};

/**
 * Fetches alcohols from the api
 * @param {FetchAlcoholOptions} opts Query parameters to filter
 * @returns {Promise<IResponse<IAlcohol[]> | null>} Null if something goes wrong
 */
export const fetchAlcohols = async (
  opts: FetchAlcoholOptions
): Promise<IResponse<IAlcohol[]> | null> =>
  getAsync<IResponse<IAlcohol[]>>('/alcohols', {
    query: {
      page: opts.page ?? 1,
      per_page: opts.perPage ?? 102,
      category: opts.category ?? '',
      search: opts.search ?? '',
    },
  }).catch(() => null);

export const categories = [
  'Öl',
  'Vin',
  'Cider & blanddrycker',
  'Sprit',
  'Alkoholfritt',
] as const;
