const express = require('express')
const response = require('../../network/response')
const controller = require('./controller_consumer')
const router = express.Router()


router.get('/check', (req, res) =>{
    controller.checkUser(req.query.user, req.query.password)
        .then((sesion)=>{
            response.success(req, res,sesion,201)
        })
        .catch((e)=>{
            response.error(req, res,"informacion incorrecta",e)
        })
})


router.post('/', (req, res) =>{
    
    controller.addUser(req.body)
        .then(()=>{
            response.success(req, res,"creado correctamente",201)
        })
        .catch(()=>{
            response.error(req, res,"informacion invalida","error para logear")
        })
})


module.exports = router