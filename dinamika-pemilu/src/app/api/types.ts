export type HttpResponseBody<T> = {
    success: boolean;
    message: string;
    data?: T
}