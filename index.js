const express = require('express');
const connectDB = require('./config/dbConnect');
const app = express()
const authRoutes = require('./routes/authRoutes')
const cors = require('cors')
require('dotenv').config();

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

//connecting Database
connectDB();

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello Panda 🐼');
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})