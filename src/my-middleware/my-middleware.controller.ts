import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { MyMiddlewareModule } from './my-middleware.module';
import { MyMiddlewareService } from './my-middleware.service';

@Controller('myMiddleware')
export class MyMiddlewareController {
  constructor(private readonly middleWareService: MyMiddlewareService) {}

  @Post('/1')
  Post1(@Body() body) {
    try {
      return {
        message: 'comment should be included as middleware ran',
        body: body,
      };
      //    let data = this.middleWareService.getThisData()
      //    if(!data) throw new BadRequestException({message:"error"})
      //    return data
    } catch (e) {
      throw new BadRequestException({ message: e });
    }
  }

  @Post('/2')
  Post2(@Body() body) {
    try {
      return {
        message: 'comment should not be included as middleware not ran',
        body: body,
      };
    } catch (e) {
      throw new BadRequestException({ message: e });
    }
  }
}
