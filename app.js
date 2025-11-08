const connectDB = require('./db/connect');
require('dotenv').config();
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// Port Number
const port = 8000;

// middle ware 
app.use('/api/v1/tasks',tasks);

// Connect to our database
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}....`);
        });
    }catch(error){
        console.log(error);
    }
}

start();



