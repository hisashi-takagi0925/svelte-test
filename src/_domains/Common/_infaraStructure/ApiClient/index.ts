import axios from 'axios';

import { responseFormatter } from '../ResponseFormatter';
import type { ResponseType } from '../ResponseFormatter/types';

import { DEFAULT_CONFIG } from './constans';

export const apiClient = () => {

    const get = async (url: string, config = {}): Promise<ResponseType> => {
        return responseFormatter(await axios.get(url, { ...DEFAULT_CONFIG, ...config }))
    };

    const post = async (url: string, data?: unknown, config = {}): Promise<ResponseType> => {
        return responseFormatter(await axios.post(url, data, { ...DEFAULT_CONFIG, ...config }));
    };

    const del = async (url: string, config = {}): Promise<ResponseType> => {
        return responseFormatter(await axios.delete(url, { ...DEFAULT_CONFIG, ...config }));
    };

    const put = async (url: string, data?: unknown, config = {}): Promise<ResponseType> => {
        return responseFormatter(await axios.put(url, data, { ...DEFAULT_CONFIG, ...config }));
    };

    return { get, post, del, put };
};
