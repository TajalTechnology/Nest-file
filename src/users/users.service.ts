import { Injectable } from '@nestjs/common';
import { ResponseHandlerMiddleware } from 'src/common/middleware/ResponseHandlerMiddleware';
import { ResponseHandlerMiddlewareProvider } from 'src/common/middleware/ResponseHandlerMiddlewareProvider';
import { Request, Response } from '@nestjs/common';
import { Res } from '@nestjs/common';

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
}


@Injectable()
export class UsersService {
    private readonly responseHandler: ResponseHandlerMiddleware;
    res: any;

    constructor(responseHandlerMiddlewareProvider: ResponseHandlerMiddlewareProvider) {
        this.responseHandler = responseHandlerMiddlewareProvider.getMiddlewareInstance();
        this.res = Response
    }

    async signup(): Promise<ApiResponse<{ message: string }>> {
        const data = {
            message: 'hello',
            option: 'Everythinbg up to date'
        };

        return this.responseHandler.success(data);

        // return {
        //     success: true,
        //     message: 'Successfully Done',
        //     data: data,
        // };
    }
    // return await this.responseHandler.success(@Res() this.res: Response, 'This message is render')

}
