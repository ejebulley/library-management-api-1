import { BookModel } from "../models/books-modules.js";
import { addBookValidator, updateBookValidator } from "../validators/books-validators.js";

export const addBook = async (req, res, next) => {
    try {
        // validate user input using Joi
        const { error, value } = addBookValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        await BookModel.create(value);
        // respond to add request
        res.status(201).json("Book added");
    } catch (error) {
        next(error);
    }

};

export const getBook = async (req, res, next) => {
    try {
        const books = await BookModel.find()
        // await LibraryModel.create(req.body);
        // respond to request
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
};

export const updateBook = async (req, res, next) => {
    try {
        // validate user inputs
        const { error, value } = updateBookValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // write todo to database
        const viewbook = await BookModel.create(value);
        // respond to request
        res.status(200).json(viewbook);
    } catch (error) {
        next(error);
    }
};


export const deleteBook = async (req, res, next) => {
    try {
        // validate user inputs
        // write todo to database
        // await BookModel.create(req.body);
        // respond to request
        res.status(200).json("Book was deleted");
    } catch (error) {
        next(error);
    }
};




