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

router.post('/' , controller.upload.single('myFile'), (req, res) => {
    console.log("ss")
    res.send({ name: controller.nameImage })
    
})
    

module.exports = router