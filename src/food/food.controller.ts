import { Body, Controller, Get, Param, Post, Res, Req, Put, Delete, Session, Query, Headers, Ip, HostParam, HttpCode, Patch } from '@nestjs/common';
import { Response, Request } from 'express';
import { singleFoodDto } from "./dtos/singlefood.dto"

@Controller('food')
export class FoodController {
    @Get()
    getMeStringFood(): String {
        return "this is a string food"
    }

    @Get("id/:id")
    getMeParamId(@Param("id") id: any): String {
        return `we got the data id : ${id}`;
    }

    @Get('getResponse')
    getMeResponseFood(@Res({ passthrough: true }) res: any): Response {
        return res.status(300).send({ "message": "this is a response type and check the status code" })
    }

    @Get('getRequest')
    getMeRequestFood(@Req() req: Request): (Request | void | string | Object) {
        return req.url
    }

    @Get("dedicated_decorators/:a/:b")
    getMeDedicatedDecorators(
        @Body() body: any,
        @Param() param: string,
        @Session() session: any,
        @Query() query: any,
        @Headers() header: any,
        @Ip() ip: string,
        @HostParam() hosts: any
    ): any {
        return { body: body, param: param, session: session, query: query, header: header, ip: ip, host: hosts }
    }

    @Get("chngResponseCode")
    @HttpCode(250)
    chngResponseCode(): string {
        return "look at the status code"
    }

    @Post("insertFood")
    getPostData(@Body() sfd: singleFoodDto): (String | number) {
        return `dto is : {${sfd.dish}}`
    }

    @Put("updateData/:id")
    updateData(@Param("id") id: number, @Body() body: singleFoodDto): string {
        return `data updated with ${body.dish} of id: ${id}`
    }

    @Delete("deletaData/:id")
    deletaData(@Param("id") id: number): string {
        return `data deleted of id ${id}`
    }
}
