import { Router } from "express";
import { addBook, deleteBook, getBook, updateBook } from "../controllers/books-controller.js";

//  create route
const libraryRoute = Router();

// define route

libraryRoute.post("/books", addBook)

libraryRoute.get("/books/:id", getBook)

libraryRoute.get("/books", getBook)

libraryRoute.patch("/books", updateBook)

libraryRoute.delete("/books", deleteBook)



//  export route

export default libraryRoute;