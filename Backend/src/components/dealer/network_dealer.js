const express = require('express')
const response = require('../../network/response')
const controller = require('./controller_dealer')
const router = express.Router()


router.get('/check', (req, res) =>{
    controller.checkDealer(req.query.name, req.query.password)
        .then((sesion)=>{
            response.success(req, res,sesion,201)
        })
        .catch((e)=>{
            response.error(req, res,"informacion incorrecta",e)
        })
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