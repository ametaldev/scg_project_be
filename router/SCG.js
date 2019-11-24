require('dotenv').config()
var express = require('express')
var router = express.Router()

/**
 * Function for find X,Y,Z value.
 *
 * @param {object}  req     The HTTP request must have version, module.
 * @param {object}  res     The HTTP response.
 *
 * @return {json} Return the list of files or empty if error.
 */
router.get('/', function (req, res) {
    let status = 400
    let json = { message: 'Bad request.' }


    res.status(status).json(json)
})




module.exports = router