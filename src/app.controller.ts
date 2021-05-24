import { Req, Res } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/hola")
  getHola(): string {
    return "HOLAA";
  }

      /*
    NO RECOMMENDED
    */
    @Get('/express')
    getTasksUsingExpress(@Req() Req, @Res() res): Response {
        console.log("using express");
        return res.send("Hello from express");
    }
}
