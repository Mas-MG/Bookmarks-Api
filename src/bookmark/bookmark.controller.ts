import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto } from './dto';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Get()
  async getBookmarks(@GetUser('id') userId: number) {
    return await this.bookmarkService.getBookmarks(userId);
  }

  @Post()
  async createBookmark(@GetUser('id') userId: number,@Body() dto: CreateBookmarkDto) {
    return await this.bookmarkService.createBookmark(userId, dto);
  }
}
