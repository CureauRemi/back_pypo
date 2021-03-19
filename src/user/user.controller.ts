import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDTO } from './dto/user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('Authentification')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Post('register')
  create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Post('login')
  getByName(@Body() user: UserDTO) {
    return this.userService.getOneByName(user);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
