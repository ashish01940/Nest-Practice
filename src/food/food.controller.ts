import { Body, Controller, Get, Param, Post, Res, Req, Put, Delete, Session, Query, Headers, Ip, HostParam, HttpCode, Patch } from '@nestjs/common';
import { Response, Request } from 'express';
// import { singleFoodDto } from "./dtos/singlefood.dto"
import { FoodService } from './food.service';
import { food } from "./interfaces/foodinterface";

@Controller('food')
export class FoodController {
    constructor(private readonly foodservice: FoodService) { }

    @Post("saveItemfromService")
    async saveItemfromService(@Body() data: food) {
        return this.foodservice.saveFoodData(data)
    }
    @Get("getAllFood")
    async getAllFood() {
        return this.foodservice.getAllFood()
    }
    @Get("getFoodById")
    async getFoodById(@Query("_id") _id: String) {
        return this.foodservice.getFoodById(_id);
    }
    @Get("getFoodByNumber/:numb")
    async getFoodByNumber(@Param("numb") numb: String) {
        return this.foodservice.getFoodByNumber(numb);
    }
    @Delete("deleteAllRecords")
    async deleteAllRecords(){
        return this.foodservice.deleteAllRecords()
    }

    // -------------------------------------------------------------------------------------------------------

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
