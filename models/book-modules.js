import { model, Schema } from "mongoose";

const bookScheme = new Schema({
    title : {
        type : String,
        required: true,
    }
})


export const BookModel = model('Books', bookscheme)
// export const  = model('Authors', authorsScheme)
