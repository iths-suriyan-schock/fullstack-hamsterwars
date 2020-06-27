let data = require('./data.json')
const { Router } = require('express');
let router = new Router();
// THIS FIRST FUNCTION I JUST COPIED FROM A SOLUTION BUT IT DOES NOT SEEM TO HELP
// routes/index.js
module.exports = (express) => {
    // Create express Router
    let router = express.Router();
    
    // Add routes
    server.route('/hamsters/api/new-hamster')//INCORRECT PATH
    .post((req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send('You sent: sdadad to Express');
    });
    
    return router;
}

//IMPORTS
const express = require('express');
const app = express();
const path = require('path');

//Creating a variable for the chosen PORT-number
const serverPort = process.env.PORT || 1234;

//Enable JSON formatting
app.use(express.json());

//Static Routes
app.use(express.static(__dirname + '/../build'))
console.log('dirname', __dirname + '/../build');

//USE BODY-PARSER BEFORE REGISTERING ROUTES!
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())

// ROUTES MODULES IMPORT
const hamstersRoute = require('./api/routes/hamsters');
const chartsRoute = require('./api/routes/charts')
const gamesRoute = require('./api/routes/games')
const statsRoute = require('./api/routes/stats')
// const imagesRoute = require('./api/routes/images')
// const uploadRoute = require('./api/routes/upload')


//STATIC (local) ROUTES?
app.use('/api/assets', express.static("assets"))
app.use(express.static('public'))

//ROUTES
app.use('/api/hamsters', hamstersRoute)
app.use('/api/charts', chartsRoute)
app.use('/api/games', gamesRoute)
app.use('/api/stats', statsRoute)
//app.use('/api/images', imagesRoute)
//app.use('/api/upload', uploadRoute)

//Need to get this done correctly!!!
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'))
})

app.listen(serverPort, () => {
    console.log(`Server is up n running @ port ${serverPort}.`)
})

module.exports = data;