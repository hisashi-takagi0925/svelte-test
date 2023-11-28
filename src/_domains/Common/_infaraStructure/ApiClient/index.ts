import axios from 'axios';

import { responseFormatter } from '../ResponseFormatter';
import type { ResponseType } from '../ResponseFormatter/types';

import { DEFAULT_CONFIG } from './constans';

export class ApiClient {
	get = async (url: string, config = {}): Promise<ResponseType> => {
		return responseFormatter(await axios.get(url, { ...DEFAULT_CONFIG, ...config }));
	};

	post = async (url: string, data?: unknown, config = {}): Promise<ResponseType> => {
		return responseFormatter(await axios.post(url, data, { ...DEFAULT_CONFIG, ...config }));
	};

	del = async (url: string, config = {}): Promise<ResponseType> => {
		return responseFormatter(await axios.delete(url, { ...DEFAULT_CONFIG, ...config }));
	};

	put = async (url: string, data?: unknown, config = {}): Promise<ResponseType> => {
		return responseFormatter(await axios.put(url, data, { ...DEFAULT_CONFIG, ...config }));
	};

};
