const express = require('express');
const cors = require('cors');
const app = express();
const ConnectMongoDB = require('./dbconnection');
const router = require('./routes/routes');


app.use(cors());

ConnectMongoDB();


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api', router);

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})
