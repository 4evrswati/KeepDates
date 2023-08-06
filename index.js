const express = require('express');
const connectDB = require('./config/dbConnect');
const app = express()
const authRoutes = require('./routes/authRoutes')

require('dotenv').config();
const PORT = process.env.PORT || 5000
app.use(express.json())

//connecting Database
connectDB();

app.use('/api/user', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello Panda 🐼');
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})