const { Router } = require('express')
const { drinkControllers } = require('../controllers/drink.controllers')


const router = Router()

router.get('/drinks',drinkControllers.getDrink)
router.get('/drinks/in-stock', drinkControllers.getDrinksInStock)
router.get('drinks/:id', drinkControllers.getOneDrinkById)
router.post('/drinks', drinkControllers.addDrink)
router.delete('/drinks/:id' , drinkControllers.deleteDrinkById)
router.patch('/drinks/:id' , drinkControllers.editDrink)

module.exports = router ;