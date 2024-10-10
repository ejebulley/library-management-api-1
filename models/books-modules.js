import { required } from "joi";
import { model, Schema } from "mongoose";

const libraryScheme = new Schema({
    title : {
        type : String,
        required: true,
    },
    author : {
        type : String,
        required: true,
    }
})

export const LibraryModel = model('Books', libraryScheme)
