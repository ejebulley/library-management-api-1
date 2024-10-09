import { BookModel } from "../models/book-modules.js";

export const addBook =  async (req, res, next) => {
    try {
        await BookModel.create(req.body);
        // respond to add request
        res.status(201).json("Book added");
    } catch (error) {
        next(error);
    }
    
};

export const getBook = async (req, res, next) => {
    try {
      const books = await BookModel.find(req.body)
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
        // write todo to database
        // await LibraryModel.create(req.body);
        // respond to request
        res.status(200).json("Book was updated");
    } catch (error) {
        next(error);
    }
};


export const deleteBook = async (req, res, next) => {
    try {
        // validate user inputs
        // write todo to database
        // await LibraryModel.create(req.body);
        // respond to request
        res.status(200).json("Book was deleted");
    } catch (error) {
        next(error);
    }
};




