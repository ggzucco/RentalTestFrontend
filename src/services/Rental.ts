import { UrlApi } from './BaseUrl'
import { AxiosResponse } from 'axios';
import { httpInstance } from './Http'
import IEquipment from '../types/IEquipment';

const url = `${UrlApi}/Equipment`

export const UpdateApi = {
    getAll: async (): Promise<AxiosResponse<IEquipment[]>> => {
        return await httpInstance().get(url);
    },
    get: async (id: number): Promise<AxiosResponse<IEquipment>> => {
        return await httpInstance().get(`${url}/${id}`);
    },
    post: async (data: any): Promise<AxiosResponse<IEquipment>> => {
        return await httpInstance().post(url, data);
    },
    put: async (id: number, data: any): Promise<AxiosResponse<IEquipment>> => {
        return await httpInstance().put(`${url}/${id}`, data);
    },
    delete: async (id: number): Promise<AxiosResponse<void>> => {
        return await httpInstance().delete(`${url}/${id}`);
    }
}