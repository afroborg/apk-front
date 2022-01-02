export interface IResponse<T> {
  data: T;
  meta: IResponseMeta;
}

export interface IResponseMeta {
  page: number;
  nextPage: number;
  onThisPage: number;
  total: number;
  totalPages: number;
}
