const mongoose = require('mongoose');

const USCarSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      price:{
        type: Number,
        required: true
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
        type:Number,
        required: true
      },
      title_status:{
        type:String,
        require: true
      },
      mileage:{
        type:Number,
        required:true
      },
      color:{
        type:String
      },
      vin:{
        type:String,
        required: true
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