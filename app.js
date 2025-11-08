const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

const port = 8000;


// middle ware 
app.use('/api/v1/tasks',tasks);


app.listen(port, () => {
    console.log(`Server is running on port ${port}....`);
});
