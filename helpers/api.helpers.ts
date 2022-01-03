import { config } from '../config';

type QueryParams = Record<string, string | number>;
type Headers = Record<string, string>;

type RequestOptions = {
  headers?: Headers;
  query?: QueryParams;
};

export const getAsync = async <T>(
  endpoint: string,
  { headers, query }: RequestOptions = {}
) => {
  const URL = `${config.API_URL}${endpoint}?${queryParams(query)}`;
  const res = await fetch(
    URL,
    {
      method: 'GET',
      headers,
    }
  );
  return res.json() as unknown as T;
};

const queryParams = (params?: QueryParams) => {
  if (!params) return '';

  return Object.keys(params)
    .map((k) => `${k}=${params[k]}`)
    .join('&');
};
