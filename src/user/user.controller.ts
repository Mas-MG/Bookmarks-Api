import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  async getMe(@GetUser() user: User) {
    return user;
  }

  @Patch('')
  async editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return await this.userService.editUser(userId, dto);
  }
}
