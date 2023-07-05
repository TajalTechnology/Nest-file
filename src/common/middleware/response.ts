import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ResponseHandlerMiddleware {
    req: any
    res: any
    constructor(req: Request, res: Response, next: NextFunction) {
        this.req = Request
        this.res = Response
    }
    success(data: any, statusCode?: number, message?: string) {
        const httpcode: number = statusCode ? statusCode : 200;
        return this.res.status(httpcode).json({
            success: true,
            message: message || 'Successfully Done',
            data: data
        });

    };

}
