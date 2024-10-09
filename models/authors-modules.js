import { model, Schema } from "mongoose";

const authorsScheme = new Schema({
    title : {
        type : String,
        required: true,
    }
})

export const AuthorsModel = model('Authors', authorsScheme)
