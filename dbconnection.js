const mongoose = require('mongoose');
// const uri = require('./uri')
const dbUrl = "mongodb+srv://admin:admin@cluster0.khplp.mongodb.net/carsdb?retryWrites=true&w=majority"

const ConnectMongoDB = async () =>{
    await mongoose.connect(dbUrl)
        .then((cnx) =>{
            console.log(`Database connected : ${cnx.connection.host}`);
        })
        .catch((error)=>{
            console.log(`Database connection error : ${error}`);
        });
}

module.exports = ConnectMongoDB;
