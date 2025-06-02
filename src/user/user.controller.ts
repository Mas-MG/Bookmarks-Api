import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@Controller('user')
export class UserController {
  constructor() {}

  @UseGuards(JwtGuard)
  @Get('me')
  async getMe(@GetUser() user:User) {
    return user;
  }
}
