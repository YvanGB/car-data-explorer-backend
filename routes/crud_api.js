const {USCar} = require('../model/model')

const addCar = async (req, res) =>{
    try{     
        const car = new USCar({
            price: req.body.price,
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            title_status: req.body.title_status,
            mileage: req.body.mileage,
            color: req.body.color,
            vin: req.body.vin,
            state: req.body.state,
            country: req.body.country,
            condition: req.body.condition
            });

           await car.save();
            
            return res.status(200).json(car);
        } catch (err) {
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de la création de la voiture."
            });
        }
}

const getCars = async(req, res) => {

    await USCar.find()
        .then((cars)=>{
            res.json(cars)
        })
        .catch(err =>{
            console.error('Erreur lors de la récupération des voitures:', err);
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de la récupération des voitures."
            });
        })
}

const getCarById = async (req, res) => {
    try {
        const car = await USCar.findOne(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Voiture introuvable' });
        }
        res.json(car);
    } catch (err) {
        console.error('Erreur lors de la récupération de la voiture par ID:', err);
        res.status(500).send({
            message: err.message || "Une erreur est survenue lors de la récupération de la voiture par ID."
        });
    }
};

const updateCar = async (req, res) => {
    try {
        const car = await USCar.findByIdAndUpdate(req.params.id, {
            price: req.body.price,
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            title_status: req.body.title_status,
            mileage: req.body.mileage,
            color: req.body.color,
            vin: req.body.vin,
            state: req.body.state,
            country: req.body.country,
            condition: req.body.condition
        }, { new: true });

        if (!car) {
            return res.status(404).json({ message: 'Voiture introuvable' });
        }

        res.json(car);
    } catch (err) {
        console.error('Erreur lors de la mise à jour de la voiture par ID:', err);
        res.status(500).send({
            message: err.message || "Une erreur est survenue lors de la mise à jour de la voiture par ID."
        });
    }
};

const deleteCar = async (req, res) => {
    try {
        const car = await USCar.findByIdAndDelete(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Voiture introuvable' });
        }

        res.json({ message: 'Voiture supprimée avec succès' });
    } catch (err) {
        console.error('Erreur lors de la suppression de la voiture par ID:', err);
        res.status(500).send({
            message: err.message || "Une erreur est survenue lors de la suppression de la voiture par ID."
        });
    }
};



module.exports = {getCars, addCar, getCarById, updateCar, deleteCar};