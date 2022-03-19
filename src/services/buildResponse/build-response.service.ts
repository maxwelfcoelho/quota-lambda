import { ResponseBody } from './interfaces/body';

export function buildResponse(statusCode: number, body: ResponseBody) {
    return {
        statusCode,
        body: JSON.stringify(body)
    };
}