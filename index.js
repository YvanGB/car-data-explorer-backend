const express = require('express');
const cors = require('cors');
const app = express();
const ConnectMongoDB = require('./dbconnection');
const router = require('./routes/routes');
const port = process.env.PORT || 5000;
const path = require('path'); 


const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Options de Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Cars Researcher API',
            version: '1.0.0',
            description: 'Documentation de l\'API Cars Researcher',
        },
        servers: [
            {
                url: 'https://cardataexplorerapi.onrender.com',
                description: 'Le serveur sur render.com',
            },
        ],
    },
    apis: ['routes/routes.js'],
};


const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(specs, { explorer: true }));

app.use(cors());

ConnectMongoDB();

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'pages/api.html'));
})

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api', router);



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
