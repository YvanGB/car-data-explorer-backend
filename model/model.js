const mongoose = require('mongoose');

const USCarSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      price:{
        type: Number
      },
      brand:{
        type:String,
        required: true
      },
      model:{
        type:String,
        required:true
      },
      year:{
        type:Number
      },
      title_status:{
        type:String,
      },
      mileage:{
        type:Number
      },
      color:{
        type:String
      },
      vin:{
        type:String
      },
      state:{
        type:String
      },
      country:{
        type: String
      },
      condition:{
        type : String
      }
}, {collection:'usacarscollection'})

const USCar = mongoose.model('USCar', USCarSchema);

module.exports = {
    USCar
};