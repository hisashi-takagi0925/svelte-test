import type { AxiosResponse } from "axios";

export type ResponseType = {
    data: AxiosResponse['data'];
    statusCode: AxiosResponse['status'];
    statusText: AxiosResponse['statusText'];
}
