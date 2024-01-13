const {USCar} = require('../model/model')

//les voitures d'une marque donnée
const findCarsByBrand = async (brand) => {
    return await USCar.find({ brand: brand });
};

const findCarsByModel = async (model) =>{
    return USCar.find({model: model})
}

//Toutes les voitures d'une année donnée
const findCarsByYear = async (year) => {
    return await USCar.find({ year: year });
};

//Toutes les voitures dans un certain état (par exemple, "California") :
const findCarsByState = async (state) => {
    return await USCar.find({ state: state });
};

//Toutes les voitures avec un certain kilométrage (par exemple, moins de 50 000 km) :
const findCarsByMileage = async (maxMileage) => {
    return await USCar.find({ mileage: { $lt: maxMileage } });
};

//Toutes les voitures avec un certain prix (par exemple, moins de 15 000) :
const findCarsByPrice = async (maxPrice) => {
    return await USCar.find({ price: { $lt: maxPrice } });
};

//Toutes les voitures d'une certaine couleur (par exemple, "rouge") :
const findCarsByColor = async (color) => {
    return await USCar.find({ color: color });
};

//Toutes les voitures avec un certain titre (par exemple, "clean") :
const findCarsByTitleStatus = async (titleStatus) => {
    return await USCar.find({ title_status: titleStatus });
};

//Agrégation pour obtenir la moyenne du prix des voitures par année
const averagePriceByYear = async () => {
    return await USCar.aggregate([
        {
            $group: {
                _id: "$year",
                averagePrice: { $avg: "$price" }
            }
        },
        {
            $sort:{
                "_id": -1
            }
        },
        {
            $project: {
                _id: 1,
                averagePrice: { $trunc: "$averagePrice" }
            }
        }
    ]);
};

//Agrégation pour obtenir le nombre de voitures par marque :
const carsCountByBrand = async () => {
    return await USCar.aggregate([
        {
            $group: {
                _id: "$brand",
                count: { $sum: 1 }
            }
        },
        {
            $project: {
                brand: "$_id",
                count: 1,
                _id: 1 // Inclure l'ID dans le résultat
            }
        }
    ]);
};


//Agrégation pour obtenir les voitures triées par kilométrage croissant :
const carsSortedByMileage = async () => {
    return await USCar.aggregate([
        {
            $sort: {
                mileage: 1
            }
        }
    ]);
};

//Agrégation pour obtenir la liste des années distinctes des voitures :
const distinctYears = async () => {
    return await USCar.aggregate([
      {
        $group: {
          _id: null,
          distinctYears: { $addToSet: "$year" }
        }
      },
      {
        $unwind: "$distinctYears"
      },
      {
        $sort: {
          distinctYears: 1
        }
      },
      {
        $group: {
          _id: null,
          distinctYears: { $push: "$distinctYears" }
        }
      },
      {
        $project: {
          _id: 0,
          distinctYears: 1
        }
      }
    ]);
  };
  

//Agrégation pour obtenir la somme des prix des voitures par marque :
const totalPricesByBrand = async () => {
    return await USCar.aggregate([
        {
            $group: {
                _id: "$brand",
                totalPrice: { $sum: "$price" }
            }
        }
    ]);
};


//Agrégation pour obtenir la moyenne et la somme des prix des voitures par année :
const averageAndTotalPriceByYear = async () => {
    return await USCar.aggregate([
      {
        $group: {
          _id: "$year",
          averagePrice: { $avg: "$price" },
          totalPrice: { $sum: "$price" }
        }
      },
      {
        $project: {
          _id: 0,
          year: "$_id",
          averagePrice: {
            $trunc: "$averagePrice" // Obtient la partie entière de la moyenne
          },
          totalPrice: 1 // Conserve le champ totalPrice
        }
      },
      {
        $sort: {
          year: 1
        }
      }
    ]);
  };
  

module.exports = {
    findCarsByBrand,
    findCarsByModel,
    findCarsByYear,
    findCarsByState,
    findCarsByMileage,
    findCarsByPrice,
    findCarsByColor,
    findCarsByTitleStatus,
    averagePriceByYear,
    carsCountByBrand,
    carsSortedByMileage,
    distinctYears,
    totalPricesByBrand,
    averageAndTotalPriceByYear
}
