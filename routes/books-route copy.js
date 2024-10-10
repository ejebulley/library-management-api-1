import { Router } from "express";
import { addBook, deleteBook, getBook, updateBook } from "../controllers/books-controller.js";

//  create route
const bookRoute = Router();

// define route

bookRoute.post("/books", addBook)

bookRoute.get("/books/:id", getBook)

bookRoute.get("/books", getBook)

bookRoute.patch("/books", updateBook)

bookRoute.delete("/books", deleteBook)



//export route
export default bookRoute;