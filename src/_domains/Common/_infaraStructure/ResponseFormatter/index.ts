import type { AxiosResponse } from "axios";

import type { ResponseType } from "./types";

export const responseFormatter = (response: AxiosResponse): ResponseType => (
    {
        data: response.data,
        statusCode: response.status,
        statusText: response.statusText
    }
)