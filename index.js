const express = require('express')
const mongoose = require('mongoose')
const port = 3000 ; 
const app = express()


app.use(express.json())

app.use(require('./router/drink.router'))
mongoose.connect("mongodb+srv://sheikh2003:Seida59522@cluster0.jqbmwip.mongodb.net/drink")

.then(() => console.log('Успешно подключились к MongoDb'))
.catch(() => console.log('Не подключено к монгоdb'))


app.listen(3000, () => console.log('Сервер запущен'))