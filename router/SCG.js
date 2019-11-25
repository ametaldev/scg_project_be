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
 * @return {json} Return the list of files or empty if error.
 */
router.post('/cal', function (req, res) {
    let status = 400
    let json = { message: 'Bad request.' }

    console.log('req : ',req.body.numData)
    let list = req.body.numData
    let x = 0
    for(index in list) {
       //x = list[index+1] - 2*((index+2)-1)
    //    if(x > 0){
    //     x = list[++index]  - 2*(++index - 1)
    //    }else{
        x = list[++index]  - 2*(++index - 1)
    //    }
      
      // console.log('list[++index] ',list[++index],' 2*(++index - 1) ',2*(++index - 1))
       console.log('X : ',x)
    }
    
    

    res.status(status).json(json)
})

/**
 * Function google place api.
 *
 * @param {object}  req     The HTTP request must have version, module.
 * @param {object}  res     The HTTP response.
 *
 * @return {json} Return the list of files or empty if error.
 */
router.post('/getMap', function(req, res) {
    let status = 200
    let json = { message: 'Bad request.' }

        // call back google place api
        // let api = `${process.env.BASE_URL}${process.env.BASE_PATH}${process.env.API_KEYWORD}${process.env.API_KEY}`
        // axios.post(`${api}`, '').then(response => 
        //     {
        //       console.log("returnData : ", response.data);  
        //       res.status(status).json(response.data) 
        //   }).catch(error => {
        //      // this.openDialog(this.const_dialog_error, 'Error', error, '');
        //   });

        var obj;
        fs.readFile('../placeAPI.json', 'utf8', function (err, data) {
            if (err) throw err;
           obj = JSON.parse(data);
           res.status(status).json(obj)
         });     
})




module.exports = router