import { Injectable } from '@nestjs/common';
import { ResponseHandlerMiddleware } from 'src/common/middleware/ResponseHandlerMiddleware';

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
}


@Injectable()
export class UsersService {
    private responseHandler: ResponseHandlerMiddleware;

    constructor() {
        this.responseHandler = new ResponseHandlerMiddleware();
    }

    async signup(): Promise<ApiResponse<{ message: string }>> {
        const data = {
            message: 'hello2',
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
