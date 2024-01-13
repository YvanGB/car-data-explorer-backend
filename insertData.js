const mongoose = require('mongoose');
const data = require('./cars'); 
const uri = 'mongodb+srv://toygb55:ZZ1buxHEmO0ola2G@cluster0.zlvx9on.mongodb.net/carsdb?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const carSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Miles_per_Gallon: {
        type: Number
    },
    Cylinders: {
        type: Number
    },
    Displacement: {
        type: Number
    },
    Horsepower: {
        type: Number
    },
    Weight_in_lbs: {
        type: Number
    },
    Acceleration: {
        type: Number
    },
    Year: {
        type: String
    },
    Origin: {
        type: String
    }
},{collection: 'carscollection'});

const Car = mongoose.model('Car', carSchema);

async function insertData() {
    try {
        await Car.insertMany(data);
        console.log('Données insérées avec succès dans la collection Cars.');
    } catch (error) {
        console.error('Erreur lors de l\'insertion des données :', error);
    } finally {
        mongoose.disconnect();
    }
}

insertData();
