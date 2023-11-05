const mongoose = require('mongoose')

const drinkSchema = mongoose.Schema ({
  name: String ,
  price: Number ,
  inStock : Boolean ,
  coffein : Boolean , 
  volume : Number , 
  discription: String,
})

const Drink = mongoose.model('Drink', drinkSchema )
module.exports = Drink