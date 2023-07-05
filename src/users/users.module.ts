import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ResponseHandlerMiddlewareProvider } from 'src/common/middleware/ResponseHandlerMiddlewareProvider';
import { ResponseHandlerMiddleware } from 'src/common/middleware/ResponseHandlerMiddleware';
@Module({
  controllers: [UsersController],
  providers: [UsersService, ResponseHandlerMiddlewareProvider, ResponseHandlerMiddleware]
})

export class UsersModule { }

