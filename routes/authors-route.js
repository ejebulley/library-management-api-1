import { Router } from "express";
import { addAuthor, deleteAuthor, getAuthor, updateAuthors } from "../controllers/authors.js";

//  create route
const authorsRoute = Router();

// define route

authorsRoute.post("/authors", addAuthor)

authorsRoute.get("/authors/:id", getAuthor)

authorsRoute.get("/authors", getAuthor)

authorsRoute.patch("/authors", updateAuthors)

authorsRoute.delete("/authors", deleteAuthor)



//  export route

export default authorsRoute;