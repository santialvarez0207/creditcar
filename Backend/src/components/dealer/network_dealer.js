const express = require('express')
const response = require('../../network/response')
const controller = require('./controller_dealer')
const router = express.Router()


router.get('/', (req, res) =>{

})


router.post('/', (req, res) =>{
    
    controller.addDealer(req.body)
        .then(()=>{
            response.success(req, res,"creado correctamente",201)
        })
        .catch(()=>{
            response.error(req, res,"informacion invalida","error para logear")
        })
})


module.exports = router