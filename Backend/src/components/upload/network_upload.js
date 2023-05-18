const response = require('../../network/response')

const controller = require('./controller_upload')

const express = require('express')
const router = express.Router()


router.get('/:name', (req, res) =>{
    let name = req.params.name
    console.log(name)
    controller.getImagen(name)
        .then((pathImagen)=>{
            res.sendFile(pathImagen)
            console.log(pathImagen)
        })
        .catch(()=>{
            response.error(req, res,"no se obtuvieron los datos")
        })
})


router.post('/', (req, res) => {
    console.log(req.file,"hola")
    res.send(req.file)
})
    

module.exports = router