// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const user = "postgres";
const host = "localhost";
const database = "journal_app";
const port = "5432";
const pass = "postgres";

// // SEQUELIZE CONNECTION
// const sequelize = new Sequelize(database, user, pass, {
//     host,
//     port,
//     dialect: "postgres",
//     logging: false
    
// })

// try {
//     sequelize.authenticate() 
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
// } catch(err) {
//     console.log(`Unable to connect to PG: ${err}`) 
// }


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to my journal app'
    })
})


// CONTROLLERS 
const entriesController = require('./controllers/entries_controller')
app.use('/entries', entriesController)

const usersController = require('./controllers/users_controller')
app.use('/users', usersController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})