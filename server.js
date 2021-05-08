//Import Dependencies
const express = require("express")
const cors = require("cors")

//Import JSON files
const projects = require("./projects.json")
const about = require("./about.json")

//Create our app object
const app = express()

//Set up Middleware
app.use(cors())

//Home route for testing our app
app.get("/", (req,res) => {
    res.send("Hello World!")
})

//Route for retrieving objects
app.get("/projects", (req,res) => {
    //send projects via JSON
    res.json(projects)
})

//Route for retrieving about info
app.get("/about", (req,res) => {
    //send about info via JSON
    res.json(about)
})

//Declare a variable for our port number
const PORT = process.env.PORT || 4000

//Turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))