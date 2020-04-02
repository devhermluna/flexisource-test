import qs from 'query-string';
import instance from './index';
import { IApiRepository } from '../interfaces/Services';

export default (resource: string = ''): IApiRepository => ({
  browse: (params: any = {}): Promise<any> =>
    instance.get(`${resource}.json?${qs.stringify(params)}`),
  read: (id: number): Promise<any> => instance.get(`${resource}/${id}`),
  edit: (params: any): Promise<any> =>
    instance.put(`${resource}/${params.id}`, params),
  add: (params: any): Promise<any> => instance.post(resource, params),
  destroy: (id: number): Promise<any> => instance.delete(`${resource}/${id}`)
});
