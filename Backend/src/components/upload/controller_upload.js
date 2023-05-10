const multer = require('multer')
const path = require('path')
const fs = require('fs')


var nameImage 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
        nameImage = `${Date.now()}-${file.originalname}`
        console.log(nameImage)
    }
})

const upload = multer({ storage })





async function getImagen (name){
    const pathImage = path.resolve(__dirname, `../../../uploads/${name}`)
    if( await fs.existsSync(pathImage)){
        return pathImage
    }else{
        const pathImage = path.resolve(__dirname, `../../../uploads/default.png`)
        return pathImage
    }
}

module.exports = {
    getImagen,
    upload,
    nameImage
}