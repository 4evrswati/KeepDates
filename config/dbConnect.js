const mongoose = require('mongoose')

const connectDB = () => {
    return mongoose.connect(process.env.DB_URL).then((x) => {
        console.log('Database Connected Successfully');
    }).catch((err) => {
        console.log('Database not connected');
    })
}

module.exports = connectDB;