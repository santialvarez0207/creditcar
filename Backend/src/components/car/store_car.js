const model = require('./model_car');


async function getCar(parameter){
    let car = model.findOne(parameter)
    return car
}


async function addCar(car){
    let mCar = new model(car)
    await mCar.save()
}

async function getCars(parameter){
    let cars = await model.find(parameter)
    return cars
}


async function getPopular(){
    console.log("store")
    let cars = await model.aggregate([{$sort: {visits: -1}}]).limit(4)
    return cars

}

async function updateCar(parameter,id){
    await model.updateOne({ _id: id}, parameter)
}

module.exports = {
    getCar,
    addCar,
    getCars,
    getPopular,
    updateCar 
}