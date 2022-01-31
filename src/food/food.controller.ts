import { Body, Controller, Get, Param, Post, Res, Req, Put, Delete, Session, Query, Headers, Ip, HostParam, HttpCode, Patch, Redirect, UsePipes } from '@nestjs/common';
import { Response, Request } from 'express';
import { saveFoodData } from "./dtos/saveFoodData.dto"
import { FoodService } from './food.service';
import { food } from "./interfaces/foodinterface";
import { ValidationPipe } from '@nestjs/common';

@Controller('food')
export class FoodController {
    constructor(private readonly foodservice: FoodService) { }

    @Post("saveItemfromService")
    @UsePipes(new ValidationPipe({
        disableErrorMessages: false,
        // whitelist: true
    }))
    saveItemfromService(@Body() data: saveFoodData) {
        console.log(data);
        return this.foodservice.saveFoodData(data)
    }
    @Get("getAllFood")
    getAllFood() {
        return this.foodservice.getAllFood()
    }
    @Get("getFoodById")
    getFoodById(@Query("_id") _id: String) {
        return this.foodservice.getFoodById(_id);
    }
    @Get("getFoodByNumber/:numb")
    getFoodByNumber(@Param("numb") numb: String) {
        return this.foodservice.getFoodByNumber(numb);
    }
    @Delete("deleteAllRecords")
    deleteAllRecords() {
        return this.foodservice.deleteAllRecords()
    }

    // -------------------------------------------------------------------------------------------------------

    @Get("redirect")
    @Redirect("https://www.google.com")
    redirectToQuery(@Query("q") q: String) {
        return { url: `https://www.google.com/search?q=${q}` }
    }

    @Get()
    getMeStringFood(): String {
        return "this is a string food"
    }

    @Get("id/:id")
    getMeParamId(@Param("id") id: any): String {
        return `we got the data id : ${id}`;
    }

    @Get('getResponse')
    getMeResponseFood(@Res() res: Response): Response {
        return res.status(300).send({ "message": "this is a response type and check the status code" })
    }

    @Get('getRequest')
    getMeRequestFood(@Req() req: Request): (Request | string | Object) {
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
        return {
            body: body,
            param: param,
            session: session,
            query: query,
            header: header,
            ip: ip,
            host: hosts
        }
    }

    @Get("chngResponseCode")
    @HttpCode(250)
    chngResponseCode(): string {
        return "look at the status code"
    }

    @Post("insertFood")
    getPostData(@Body() sfd: food): (String | number) {
        return `schemas are : {${sfd}}`
    }

    @Put("updateData/:id")
    updateData(@Param("id") id: number, @Body() body: food): string {
        return `data updated with ${body.name} of id: ${id}`
    }

    @Delete("deletaData/:id")
    deletaData(@Param("id") id: number): string {
        return `data deleted of id ${id}`
    }
}
