import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('signup')
  async signup() {
    const data = await this.usersService.signup();

    return { message: data }
  }
}
