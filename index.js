const express = require('express');
const connectDB = require('./config/dbConnect');
const app = express()

require('dotenv').config();
const PORT = process.env.PORT
connectDB();

app.get('/', (req, res) => {
    res.send('Hello Panda');
})


app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})