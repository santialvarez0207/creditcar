const express = require('express')
const response = require('../../network/response')
const controller = require('./controller_consumer')
const router = express.Router()


router.get('/check', (req, res) =>{
    controller.checkUser(req.query.email, req.query.password)
        .then((sesion)=>{
            response.success(req, res,sesion,201)
        })
        .catch((e)=>{
            response.error(req, res,"informacion incorrecta",e)
        })
})


router.post('/', (req, res) =>{
    
    controller.addUser(req.body)
        .then((val)=>{
            response.success(req, res,val,201)
        })
        .catch(()=>{
            response.error(req, res,val,"error para logear")
        })
})

router.get('/:id', (req, res) =>{
    let id = req.params.id
    controller.getUser(id)
        .then((user)=>{
            response.success(req, res,user,201)
        })
        .catch(()=>{
            response.error(req, res,"no se obtuvieron los datos")
        })
})


module.exports = router