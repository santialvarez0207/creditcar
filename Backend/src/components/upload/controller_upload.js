
const path = require('path')
const fs = require('fs')

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
    getImagen
}