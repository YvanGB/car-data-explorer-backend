const {
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
    filterCarsByYearAndTransmission,
    averageAndTotalPriceByYear
} = require('./search')

const findCarsByBrandRoute = async(req, res) =>{
    let brand = "ford"
    await findCarsByBrand(brand)
        .then(result =>{
            res.status(200).json(result)
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de la recherche"
            });
        })
}

const findCarsByModelRoute = async(req, res) =>{
    let model = "door"
    await findCarsByModel(model)
        .then(result =>{
            res.status(200).json(result)
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de la recherche"
            });
        })
}

const findCarsByYearRoute = async(req, res) =>{
    let year = 2011;
    await findCarsByYear(year)
        .then(result =>{
            res.json(result);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de la recherche."
            });
        })
}

const findCarsByStateRoute = async(req, res) =>{
    let state = "texas";
    await findCarsByState(state)
        .then(result =>{
            res.json(result);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de la recherche."
            });
        })
}

const findCarsByMileageRoute = async(req, res) =>{
    let mileage = 35000;
    await findCarsByMileage(mileage)
        .then(result =>{
            res.json(result);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de la recherche."
            });
        })
}

const findCarsByPriceRoute = async(req, res) =>{
    let price = 8000;
    await findCarsByPrice(price)
        .then(result =>{
            res.json(result);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de la recherche."
            });
        })
}

const findCarsByColorRoute = async(req, res) =>{
    let color = "black";
    await findCarsByColor(color)
        .then(result =>{
            res.json(result);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de la recherche."
            });
        })
}

const findCarsByTitleStatusRoute = async(req, res) =>{
    let title_status = "clean vehicle";
    await findCarsByTitleStatus(title_status)
        .then(result =>{
            res.json(result);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de la recherche."
            });
        })
}

const averagePriceByYearRoute = async (req, res) => {
    try {
        const result = await averagePriceByYear();
        res.json(result);
    } catch (err) {
        console.error('Erreur lors de l\'agrégation de la moyenne des prix par année:', err);
        res.status(500).send({
            message: err.message || "Une erreur est survenue lors de l'agrégation de la moyenne des prix par année."
        });
    }
};

const carsCountByBrandRoute = async (req, res) => {
    try {
        const result = await carsCountByBrand();
        res.json(result);
    } catch (err) {
        console.error('Erreur lors de l\'agrégation du nombre de voitures par marque:', err);
        res.status(500).send({
            message: err.message || "Une erreur est survenue lors de l'agrégation du nombre de voitures par marque."
        });
    }
};

const carsSortedByMileageRoute = async (req, res) => {
    try {
        const result = await carsSortedByMileage();
        res.json(result);
    } catch (err) {
        console.error('Erreur lors de l\'agrégation des voitures triées par kilométrage croissant:', err);
        res.status(500).send({
            message: err.message || "Une erreur est survenue lors de l'agrégation des voitures triées par kilométrage croissant."
        });
    }
};

const distinctYearsRoute = async (req, res) => {
    try {
        const result = await distinctYears();
        res.json(result);
    } catch (err) {
        console.error('Erreur lors de l\'agrégation des années distinctes des voitures:', err);
        res.status(500).send({
            message: err.message || "Une erreur est survenue lors de l'agrégation des années distinctes des voitures."
        });
    }
};

const totalPricesByBrandRoute = async (req, res) => {
    try {
        const result = await totalPricesByBrand();
        res.json(result);
    } catch (err) {
        console.error('Erreur lors de l\'agrégation des prix totaux des voitures par marque:', err);
        res.status(500).send({
            message: err.message || "Une erreur est survenue lors de l'agrégation des prix totaux des voitures par marque."
        });
    }
};

const averageAndTotalPriceByYearRoute = async (req, res) => {
    try {
        const result = await averageAndTotalPriceByYear();
        res.json(result);
    } catch (err) {
        console.error('Erreur lors de l\'agrégation de la moyenne et de la somme des prix par année:', err);
        res.status(500).send({
            message: err.message || "Une erreur est survenue lors de l'agrégation de la moyenne et de la somme des prix par année."
        });
    }
};


module.exports = {
    findCarsByBrandRoute,
    findCarsByModelRoute,
    findCarsByYearRoute,
    findCarsByStateRoute,
    findCarsByMileageRoute,
    findCarsByPriceRoute,
    findCarsByColorRoute,
    findCarsByTitleStatusRoute,
    averagePriceByYearRoute,
    carsCountByBrandRoute,
    carsSortedByMileageRoute,
    distinctYearsRoute,
    totalPricesByBrandRoute,
    averageAndTotalPriceByYearRoute

}







