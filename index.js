import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import libraryRoute from "./routes/books-route.js";


//  create express app
const app = express();

// create database
await mongoose.connect(process.env.MONGO_URI);

// use middlewares
app.use(express.json());
app.use(cors());

//  use routes
app.use(libraryRoute);


// app listening
app.listen(3009, () => {
    console.log("App is listening on port 3009")
})