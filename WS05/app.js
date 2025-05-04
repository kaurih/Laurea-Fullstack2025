const express = require ('express');
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database.'))

app.use(express.json())

const personsRouter = require('./routes/persons')
app.use('/persons', personsRouter)


app.listen(3000, () => console.log('The server is running!'));
