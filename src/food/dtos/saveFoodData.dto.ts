import { MinLength, MaxLength, Length, IsEnum } from "class-validator"
export class saveFoodData {

    @Length(5, 50)
    readonly name: string

    @IsEnum(["good", "bad", "very good", "worst"])
    readonly taste?: string

    @Length(10, 10)
    readonly cellNo: string
}