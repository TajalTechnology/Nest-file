import { Injectable } from '@nestjs/common';
import { ResponseHandlerMiddleware } from './ResponseHandlerMiddleware';

@Injectable()
export class ResponseHandlerMiddlewareProvider {
    constructor(private readonly middleware: ResponseHandlerMiddleware) { }

    getMiddlewareInstance() {
        return this.middleware;
    }
}