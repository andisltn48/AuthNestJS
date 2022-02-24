import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  //Post /login
  @Post('login')
  login(@Request() req): any {
    return {msg: 'Berhasil login!'};
  }

  @UseGuards(AuthenticatedGuard)
  //Get /protected
  @Get('protected') 
  getHello(@Request() req): string {
    // return this.appService.getHello();
    return req.user;
  }
}
