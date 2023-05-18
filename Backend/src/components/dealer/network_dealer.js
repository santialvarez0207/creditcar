const express = require('express')
const response = require('../../network/response')
const controller = require('./controller_dealer')
const router = express.Router()


router.get('/check', (req, res) =>{
    console.log(req.query.email,req.query.password)
    controller.checkDealer(req.query.email, req.query.password)
        .then((sesion)=>{
            response.success(req, res,sesion,201)
        })
        .catch((e)=>{
            response.error(req, res,"informacion incorrecta",e)
        })
})

router.get('/dealerProbability', (req, res) =>{
    data={
        'age': req.query.age, 
        'amount': req.query.amount,
        'price' : req.query.price,
        'amountfinance' : req.query.amountfinance,
        typeofresidence : req.query.typeofresidence, 
        credit : req.query.credit,
        typeofcontract : req.query.typeofcontract,
        income : req.query.income,
        zip : req.query.zip
    }
    controller.recommendedDealers(req.query.city, data)
        .then((sesion)=>{
            response.success(req, res,sesion,201)
        })
        .catch((e)=>{
            response.error(req, res,"informacion incorrecta",e)
        })
})


router.post('/', (req, res) =>{
    console.log("Network")
    controller.addDealer(req.body)
        .then(()=>{
            response.success(req, res,"creado correctamente",201)
        })
        .catch(()=>{
            response.error(req, res,"informacion invalida","error para logear")
        })
})

router.get('/:id', (req, res) =>{
    let id = req.params.id
    controller.getDealer(id)
        .then((Dealer)=>{
            response.success(req, res,Dealer,201)
        })
        .catch(()=>{
            response.error(req, res,"no se obtuvieron los datos")
        })
})


module.exports = router