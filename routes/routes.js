const express = require('express');
const router = express.Router();
const carsCrud = require('./crud_api')
const carsSearch = require('./search_api')

// router.get('/', (req, res) =>{
//     res.send("Bienvenue")
// })


//Routes CRUD
/**
 * @swagger
 * /api/addCar:
 *   post:
 *     summary: Ajouter une nouvelle voiture
 *     tags: [CRUD Operations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: integer
 *                 description: Le prix de la voiture
 *               brand:
 *                 type: string
 *                 description: La marque de la voiture
 *               model:
 *                 type: string
 *                 description: Le modèle de la voiture
 *               year:
 *                 type: integer
 *                 description: L'année de la voiture
 *               title_status:
 *                 type: string
 *                 description: Le statut du titre de la voiture
 *               mileage:
 *                 type: float
 *                 description: Le kilométrage de la voiture
 *               color:
 *                 type: string
 *                 description: La couleur de la voiture
 *               vin:
 *                 type: string
 *                 description: Le numéro d'identification de la voiture
 *               state:
 *                 type: string
 *                 description: L'état de la voiture
 *               country:
 *                 type: string
 *                 description: Le pays de la voiture
 *               condition:
 *                 type: string
 *                 description: La condition de la voiture
 *     responses:
 *       '201':
 *         description: Voiture ajouté avec succès
 *       '400':
 *         description: Requête invalide
 */
router.post('/addCar', carsCrud.addCar);

/**
 * @swagger
 * /api/cars:
 *   get:
 *     summary: Obtient la liste complète des voitures
 *     tags: [Ajouter avequêtes simples]
 *     responses:
 *       '200':
 *         description: Liste complète des voitures obtenue avec succès
 *       '404':
 *         description: Aucune voiture n'a été trouvée dans la base de données
 */
router.get('/cars', carsCrud.getCars);

/**
 * @swagger
 * /api/cars/{id}:
 *   get:
 *     summary: Obtient une voiture par son ID
 *     tags: [CRUD Operations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la voiture à obtenir
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Voiture obtenue avec succès
 *       '404':
 *         description: Aucune voiture n'a été trouvée avec l'ID fourni
 */

/**
 * @swagger
 * /api/cars/{id}:
 *   put:
 *     summary: Met à jour une voiture par son ID
 *     tags: [CRUD Operations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la voiture à mettre à jour
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Nouvelles informations de la voiture
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Car'
 *     responses:
 *       '200':
 *         description: Voiture mise à jour avec succès
 *       '404':
 *         description: Aucune voiture n'a été trouvée avec l'ID fourni
 */

/**
 * @swagger
 * /api/cars/{id}:
 *   delete:
 *     summary: Supprime une voiture par son ID
 *     tags: [CRUD Operations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la voiture à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Voiture supprimée avec succès
 *       '404':
 *         description: Aucune voiture n'a été trouvée avec l'ID fourni
 */
router.get('/cars/:id', carsCrud.getCarById);
router.put('/cars/:id', carsCrud.updateCar);
router.delete('/cars/:id', carsCrud.deleteCar);

//Routes de requêtes simples
/**
 * @swagger
 * /api/carsByBrand:
 *   get:
 *     summary: Récupère toutes les voitures d'une marque donnée
 *     tags: [Ajouter avequêtes simples]
 *     parameters:
 *       - in: query
 *         name: brand
 *         required: true
 *         description: La marque des voitures à récupérer
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Voitures récupérées avec succès
 *       '404':
 *         description: Aucune voiture trouvée pour la marque spécifiée
 */
router.get('/carsByBrand', carsSearch.findCarsByBrandRoute);
/**
 * @swagger
 * /api/carsByModel:
 *   get:
 *     summary: Récupère toutes les voitures d'un modèle donné
 *     tags: [Ajouter avequêtes simples]
 *     parameters:
 *       - in: query
 *         name: model
 *         required: true
 *         description: Le modèle des voitures à récupérer
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Voitures récupérées avec succès
 *       '404':
 *         description: Aucune voiture trouvée pour le modèle spécifié
 */
router.get("/carsByModel", carsSearch.findCarsByModelRoute);
/**
 * @swagger
 * /api/carsByYear:
 *   get:
 *     summary: Récupère toutes les voitures d'une année donnée
 *     tags: [Ajouter avequêtes simples]
 *     parameters:
 *       - in: query
 *         name: year
 *         required: true
 *         description: L'année des voitures à récupérer
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Voitures récupérées avec succès
 *       '404':
 *         description: Aucune voiture trouvée pour l'année spécifiée
 */
router.get("/carsByYear", carsSearch.findCarsByYearRoute);
/**
 * @swagger
 * /api/carsByState:
 *   get:
 *     summary: Récupère toutes les voitures dans un certain état
 *     tags: [Ajouter avequêtes simples]
 *     parameters:
 *       - in: query
 *         name: state
 *         required: true
 *         description: L'état des voitures à récupérer
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Voitures récupérées avec succès
 *       '404':
 *         description: Aucune voiture trouvée pour l'état spécifié
 */
router.get("/carsByState", carsSearch.findCarsByStateRoute);
/**
 * @swagger
 * /api/carsByMileage:
 *   get:
 *     summary: Récupère toutes les voitures avec un certain kilométrage
 *     tags: [Ajouter avequêtes simples]
 *     parameters:
 *       - in: query
 *         name: maxMileage
 *         required: true
 *         description: Le kilométrage maximum des voitures à récupérer
 *         schema:
 *           type: number
 *     responses:
 *       '200':
 *         description: Voitures récupérées avec succès
 *       '404':
 *         description: Aucune voiture trouvée pour le kilométrage spécifié
 */
router.get("/carsByMileage", carsSearch.findCarsByMileageRoute);
/**
 * @swagger
 * /api/carsByPrice:
 *   get:
 *     summary: Récupère toutes les voitures d'un prix donné
 *     tags: [Ajouter avequêtes simples]
 *     parameters:
 *       - in: query
 *         name: maxPrice
 *         required: true
 *         description: Le prix maximum des voitures à récupérer
 *         schema:
 *           type: number
 *     responses:
 *       '200':
 *         description: Voitures récupérées avec succès
 *       '404':
 *         description: Aucune voiture trouvée pour le prix spécifié
 */
router.get("/carsByPrice", carsSearch.findCarsByPriceRoute);
/**
 * @swagger
 * /api/carsByColor:
 *   get:
 *     summary: Récupère toutes les voitures d'une certaine couleur
 *     tags: [Ajouter avequêtes simples]
 *     parameters:
 *       - in: query
 *         name: color
 *         required: true
 *         description: La couleur des voitures à récupérer
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Voitures récupérées avec succès
 *       '404':
 *         description: Aucune voiture trouvée pour la couleur spécifiée
 */
router.get("/carsByColor", carsSearch.findCarsByColorRoute);
/**
 * @swagger
 * /api/CarsByTitleStatus:
 *   get:
 *     summary: Récupère toutes les voitures avec un certain titre
 *     tags: [Ajouter avequêtes simples]
 *     parameters:
 *       - in: query
 *         name: titleStatus
 *         required: true
 *         description: Le statut du titre des voitures à récupérer
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Voitures récupérées avec succès
 *       '404':
 *         description: Aucune voiture trouvée pour le statut du titre spécifié
 */
router.get("/carsByTitleStatus", carsSearch.findCarsByStateRoute);

// Routes d'agrégation
/**
 * @swagger
 * /api/averagePriceByYear:
 *   get:
 *     summary: Obtient la moyenne du prix des voitures par année
 *     tags: [Aggregations - requêtes analytiques]
 *     responses:
 *       '200':
 *         description: Moyenne du prix des voitures par année obtenue avec succès
 *       '404':
 *         description: Aucune donnée disponible pour calculer la moyenne
 */
router.get('/averagePriceByYear', carsSearch.averagePriceByYearRoute);
/**
 * @swagger
 * /api/carsCountByBrand:
 *   get:
 *     summary: Obtient le nombre de voitures par marque
 *     tags: [Aggregations - requêtes analytiques]
 *     responses:
 *       '200':
 *         description: Nombre de voitures par marque obtenu avec succès
 *       '404':
 *         description: Aucune donnée disponible pour calculer le nombre de voitures par marque
 */
router.get('/carsCountByBrand', carsSearch.carsCountByBrandRoute);
/**
 * @swagger
 * /api/carsSortedByMileage:
 *   get:
 *     summary: Obtient la liste des voitures triées par kilométrage croissant
 *     tags: [Aggregations - requêtes analytiques]
 *     responses:
 *       '200':
 *         description: Liste des voitures triées par kilométrage croissant obtenue avec succès
 *       '404':
 *         description: Aucune donnée disponible pour trier les voitures par kilométrage
 */
router.get('/carsSortedByMileage', carsSearch.carsSortedByMileageRoute);
/**
 * @swagger
 * /api/distinctYears:
 *   get:
 *     summary: Obtient la liste des années distinctes des voitures
 *     tags: [Aggregations - requêtes analytiques]
 *     responses:
 *       '200':
 *         description: Liste des années distinctes des voitures obtenue avec succès
 *       '404':
 *         description: Aucune donnée disponible pour obtenir la liste des années distinctes des voitures
 */
router.get('/distinctYears', carsSearch.distinctYearsRoute);
/**
 * @swagger
 * /api/totalPricesByBrand:
 *   get:
 *     summary: Obtient la somme des prix des voitures par marque
 *     tags: [Aggregations - requêtes analytiques]
 *     responses:
 *       '200':
 *         description: Somme des prix des voitures par marque obtenue avec succès
 *       '404':
 *         description: Aucune donnée disponible pour calculer la somme des prix par marque
 */
router.get('/totalPricesByBrand', carsSearch.totalPricesByBrandRoute);
/**
 * @swagger
 * /api/averageAndTotalPriceByYear:
 *   get:
 *     summary: Obtient la moyenne et la somme des prix des voitures par année
 *     tags: [Aggregations - requêtes analytiques]
 *     responses:
 *       '200':
 *         description: Moyenne et somme des prix des voitures par année obtenues avec succès
 *       '404':
 *         description: Aucune donnée disponible pour calculer la moyenne et la somme des prix par année
 */
router.get('/averageAndTotalPriceByYear', carsSearch.averageAndTotalPriceByYearRoute);


module.exports = router;