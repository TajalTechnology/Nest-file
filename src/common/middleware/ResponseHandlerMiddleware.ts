import { Injectable } from '@nestjs/common';


@Injectable()
export class ResponseHandlerMiddleware {
    success(data: any, statusCode?: number, message?: string) {
        const httpCode: number = statusCode ? statusCode : 200;
        return {
            success: true,
            message: 'Successfully Done',
            data: data,
        };
    }
}
