export interface IApiRepository {
  browse: (payload: any) => Promise<any>;
  read: (id: number) => Promise<any>;
  edit: (payload: any) => Promise<any>;
  add: (payload: any) => Promise<any>;
  destroy: (id: number) => Promise<any>;
}
