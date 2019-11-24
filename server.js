const express = require('express')
const app = express()
const port = 3000

let SCG = require('./router/SCG')

/**
 * Middleware for this router
 *
 * @param {object}  req     The HTTP request.
 * @param {object}  res     The HTTP response.
 * @param {object}  next    The next middlewarehe.
 *
 * @return {void}
 */
app.use(function timeLog(req, res, next) {
    // TODO Check credential
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

/**
 * Parsing application/json
 */
app.use(express.json())

/**
 * Endpoints
 */
app.use('/scg', SCG)

/**
 * Default 404 redirects to UI
 */
app.all('*', function (req, res) {
    res.redirect(301, 'https://www.scg.com/innovation/digital-transformation-scg-2/')
})

/**
 * Port listenning
 */
app.listen(port)

console.log(`Server running on port ${port}`)