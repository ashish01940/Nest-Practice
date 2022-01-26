import { Injectable } from '@nestjs/common';
import { food } from './interfaces/foodinterface';
import { foodschemaName, foodschema } from './schemas/foodSchemas';
import { InjectModel } from "@nestjs/mongoose"
import { Model } from 'mongoose';
// import { singleFoodDto } from './dtos/singlefood.dto';

@Injectable()
export class FoodService {

    constructor(@InjectModel(foodschemaName) private foodModel: Model<food>) { }


    // boilor plate => async (): Promise<any> {}

    async saveFoodData(data: food): Promise<any> {
        var objToBeSaved = new this.foodModel(data)
        let existingRecords = await this.getFoodByNumber(data.cellNo)
        if (!existingRecords) return objToBeSaved.save()
            .catch((err) => err)
            .then((res) => res)
        return `cell no : ${data.cellNo} already exist`
    }

    async getAllFood(): Promise<any> {
        return this.foodModel.find();
    }

    async getFoodById(_id: String): Promise<any> {
        return this.foodModel.findById(_id);
    }

    async getFoodByNumber(numb: String) {
        return this.foodModel.findOne({ cellNo: numb })
    }
    async deleteAllRecords() {
        return this.foodModel.deleteMany()
    }

    getFood(): food {
        return {
            name: "paneerRoll",
            taste: "awesome sauce",
            cellNo: "9988998899"
        }
    }
}
