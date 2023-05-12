const response = require('../../network/response')

const controller = require('./controller_upload')

const express = require('express')
const router = express.Router()


router.get('/:name', (req, res) =>{
    let name = req.params.name
    controller.getImage(name)
        .then((pathImagen)=>{
            response.success(req, res.sendFile(pathImagen),pathImagen,201)
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