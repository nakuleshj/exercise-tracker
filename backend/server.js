const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const bodyParser = require("body-parser");
require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex:true,useUnifiedTopology: true});

const connection=mongoose.connection;
connection.once(
    'open',()=>{
        console.log("MongoDB database connection established successfully");
    }
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const excercisesRouter=require('./routes/exercises');
const usersRouter=require('./routes/users');
app.use('/exercises',excercisesRouter);
app.use('/users',usersRouter);
app.listen(port,()=>{
    console.log(`Server running on port: ${port}`);
});