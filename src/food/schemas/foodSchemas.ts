import * as mongoose from 'mongoose';
// import { Schema, Prop } from "@nestjs/mongoose"

export const foodschemaName = 'foodies';
export const foodschema = new mongoose.Schema({
  name: { type: String, required: true },
  taste: {
    type: String,
    enum: ['good', 'bad', 'very good', 'worst'],
    select: false,
  },
  cellNo: { type: String, required: true },
  arr: [{ idna: mongoose.Types.ObjectId, _id: false }],
});

// @Schema()
// export class foodschema {
//     @Prop()
//     name: String

//     @Prop()
//     taste: String
// }
