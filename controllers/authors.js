import { AuthorsModel } from "../models/authors-modules.js";

export const addAuthor =  async (req, res, next) => {
    try {
        await AuthorsModel.create(req.body);
        // respond to add request
        res.status(201).json("Author added successfully");
    } catch (error) {
        next(error);
    }
    
};

export const getAuthor = async (req, res, next) => {
    try {
      const authors = await AuthorsModel.find(req.body)
        // await AuthorsModel.create(req.body);
        // respond to request
        res.status(200).json(authors);
    } catch (error) {
        next(error);
    }
};

export const updateAuthors = async (req, res, next) => {
    try {
        // validate user inputs
        // write todo to database
        // await AuthorsModel.create(req.body);
        // respond to request
        res.status(200).json("Author updated successfully");
    } catch (error) {
        next(error);
    }
};


export const deleteAuthor = async (req, res, next) => {
    try {
        // validate user inputs
        // write todo to database
        // await AuthorsModel.create(req.body);
        // respond to request
        res.status(200).json("Author delete successful");
    } catch (error) {
        next(error);
    }
};




