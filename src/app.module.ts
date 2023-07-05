import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ResponseHandlerMiddleware } from './common/middleware/response';
import { UsersService } from './users/users.service';

@Module({
  imports: [UsersModule]
})
export class AppModule { }
