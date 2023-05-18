
const path = require('path')
const fs = require('fs')

async function getImagen(name){
    const pathImage = path.resolve(__dirname, `../../../uploads/${name}`)
    if( await fs.existsSync(pathImage)){
        return pathImage
    }else{
        const pathImage = path.resolve(__dirname, `../../../uploads/default.png`)
        return pathImage
    }
}

async function getImagenes(names) {
    const paths = await Promise.all(names.map(async (name) => {
      const pathImage = path.resolve(__dirname, `../../../uploads/${name}`);
      if (await fs.existsSync(pathImage)) {
        return pathImage;
      } else {
        const defaultImagePath = path.resolve(__dirname, `../../../uploads/default.png`);
        return defaultImagePath;
      }
    }));
    
    return paths;
  }

module.exports = {
    getImagen,
    getImagenes
}