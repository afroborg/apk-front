import { IStatus } from '../models/IStatus';
import { getAsync } from './api.helpers';

export const getStatus = async (): Promise<IStatus> => {
  const res = await getAsync<IStatus>('/status');
  return res;
};
