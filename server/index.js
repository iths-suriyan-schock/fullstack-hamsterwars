
const express = require('express');
const app = express();
// require('./initdb')

// ROUTES
const bodyParser = require('body-parser')//(In CMD - npm install body-parser) Using 3rd-party middleware to add funtionality to express apps
//body-parser is already built-in as a standard express sub-component
const hamstersRoute = require('./routes/hamsters');
const chartsRoute = require('./routes/charts')
const gamesRoute = require('./routes/games')
const statsRoute = require('./routes/stats')

//app.use = Bind app-lvl middleware to an instance of the app object
app.use(bodyParser.json())//Load Node.js body-parsing middleware - Returns middleware that only parses JSON & only looks at requests where the Content-Type header matches the type option. A new body object containing the parsed data is populated on the request object after the middleware.
app.use('/assets', express.static("assets"))
app.use(express.static('public'))//express.static = Serves static assets such as HTML files, images & etc

app.use('/hamsters', hamstersRoute)
app.use('/charts', chartsRoute)
app.use('/games', gamesRoute)
app.use('/stats', statsRoute)

app.listen(3000, () => {
    console.log('Server is up n running @ port 3000.')
})