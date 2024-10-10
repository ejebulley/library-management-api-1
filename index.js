import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import authorsRoute from "./routes/authors-route.js";
import bookRoute from "./routes/books-route copy.js";


//  create express app
const app = express();

// create database
await mongoose.connect(process.env.MONGO_URI);

// use middlewares
app.use(express.json());
app.use(cors());

//  use routes
app.use(bookRoute);
app.use(authorsRoute);


// app listening
app.listen(3009, () => {
    console.log("App is listening on port 3009")
})