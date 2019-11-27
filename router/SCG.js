require('dotenv').config()
var express = require('express')
var router = express.Router()
var axios = require('axios');
var fs = require('fs');


/**
 * Function for find X,Y,Z value.
 *
 * @param {object}  req     The HTTP request must have version, module.
 * @param {object}  res     The HTTP response.
 *
 * @return {Array} Return the list value.
 */
router.post('/cal', function (req, res) {
    let status = 400
    let json = { message: 'Bad request.' }

    if(req.body.numData !== undefined) {
        try{
            let list = req.body.numData
            
            let indexX = list.indexOf('X')
            let valueX = list[indexX+1] - 2*((indexX+2)-1)
            list[indexX] = valueX

            let indexY = list.indexOf('Y')
            let valueY =list[indexY-1] + 2*((indexY+1)-1)
            list[indexY] = valueY

            let indexZ = list.indexOf('Z')
            let valueZ = list[indexZ-1]  + 2*((indexZ+1)-1)
            list[indexZ] = valueZ
            
            status = 200
            json = {list:list}
        }catch(err){
            status = 500
            json.message = err.message
        }
    }
    
    res.status(status).json(json)
})

/**
 * Function google place api.
 *
 * @param {object}  req     The HTTP request must have version, module.
 * @param {object}  res     The HTTP response.
 *
 * @return {json} Return the json list place.
 */
router.post('/getMap', function(req, res) {
    let status = 200
    let json = { message: 'Bad request.' }

        // call back google place api
        let api = `${process.env.BASE_URL}${process.env.BASE_PATH}${process.env.API_KEYWORD}${process.env.API_KEY}`
        axios.post(`${api}`, '').then(response => 
            {
                response.status(status).json(response.data) 
          }).catch(error => {
             console.log(error)
          });

          //TODO use next_page_token for next page

        // Mockup data for test api
        // var obj;
        // fs.readFile('../placeAPI.json', 'utf8', function (err, data) {
        //     if (err) throw err;
        //    obj = JSON.parse(data);
        //    res.status(status).json(obj)
        //  });     
})




module.exports = router