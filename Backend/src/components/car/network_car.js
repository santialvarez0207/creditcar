const response = require('../../network/response')

const controller = require('./controller_car')

const express = require('express')
const router = express.Router()


router.post('/', (req, res) =>{
    
    controller.addCar(req.body)
        .then(()=>{
            response.success(req, res,"creado correctamente",201)
        })
        .catch(()=>{
            response.error(req, res,"informacion invalida","error para logear")
        })
})

router.get('/', (req, res) =>{
    
    controller.getCars()
        .then((cars)=>{
            response.success(req, res,cars,201)
        })
        .catch(()=>{
            response.error(req, res,"no se obtuvieron los datos")
        })
})

router.get('/dealer/:id', (req, res) =>{
    let id = req.params.id
    console.log("IdeDealr")
    controller.getCars({"information.id_dealer":id})
        .then((cars)=>{
            response.success(req, res,cars,201)
        })
        .catch(()=>{
            response.error(req, res,"no se obtuvieron los datos")
        })
})

router.get('/popular', (req, res) =>{
    console.log("net")
    controller.getPopularCars()
        .then((cars)=>{
            response.success(req, res,cars,201)
        })
        .catch(()=>{
            response.error(req, res,"no se obtuvieron los datos")
        })
})

router.get('/:id', (req, res) =>{
    let id = req.params.id
    controller.getCar(id)
        .then((car)=>{
            response.success(req, res,car,201)
        })
        .catch(()=>{
            response.error(req, res,"no se obtuvieron los datos")
        })
})

module.exports = router