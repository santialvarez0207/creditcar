const store = require('./store_car');



function addCar(body){
    return new Promise((resolve, reject) => {
        console.log(body)
        if(!body){
            return reject("no hay datos")
        }

        fecha = new Date();
        let car = {
            visits: body.visits,
            information: body.information,
            pspecifications: body.pspecifications,
            consumption: body.consumption,
            performace: body.performace,
            security: body.security,
            measures: body.measures,
            additional: body.additional,
        };
        store.addCar(car)
        return resolve("Car agregado correctamente")

    })

}


async function getCars() {
    try {
        let cars = await store.getCars();
        console.log(cars);
        return cars
    } catch (error) {
        throw error;
    }
}




async function getCar(id) {
    try {
        let car = await store.getCar({_id: id});
        console.log(car);
        return car
    } catch (error) {
        throw error;
    }
}


async function getPopularCars(){
    try {
        let cars = await store.getPopular()

        if(cars.length > 0){
            return cars
        }else {
            throw new Error("datos incorrectos");
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addCar,
    getPopularCars,
    getCar,
    getCars,
}