import { LibraryModel } from "../models/books-modules.js";
import libraryRoute from "../routes/books-route.js";

export const addBook =  async (req, res, next) => {
    try {
        await LibraryModel.create(req.body);
        // respond to add request
        res.status(201).json("Book added");
    } catch (error) {
        next(error);
    }
    
};

export const getBook = async (req, res, next) => {
    try {
      const books = await LibraryModel.find()
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




