const model_customer = require("../consumer/model_customer");
const store = require("./store_dealer");


function addDealer(body){
    return new Promise((resolve, reject) => {
        console.log("Controller")
        if(!body){
            return reject("no hay datos")
        }
        if(store.getDealer({email: body.email})){
            return resolve(false)
        }

        fecha = new Date();
        let dealer = {
            user:  body.user,
            password: body.password,
            email: body.email,
            nit: body.nit,
            phone_number:  body.phone_number,
            location: body.location,
            contact_ids:  body.contact_ids,
            registration_date: fecha,
            credit_requirements: body.credit_requirements,
            percent: body.percent
        };
        store.addDealer(dealer)
        return resolve(true)

    })

}



async function checkDealer(email, password){
    try {
        let dealer = await store.getDealer({email: email, password: password});
        
        if(email && password && dealer != null){
            console.log(dealer.user)
            let sesion = {
                name: dealer.user,
                id: dealer._id,
                session: true
            };
            console.log(sesion)
            return sesion;
        } else {
            throw new Error("datos incorrectos");
        }
    } catch (error) {
        throw error;
    }
}

async function recommendedDealers(city,data){
    try {
        let dealers = await store.getDealers({ 'location.city': { $in: [city, ""] } });
        let dealersEvaluados = dealers.map((dealer) => {
            return evaluateDealer(dealer,data)})
        dealersEvaluados.sort((a, b) => b.percent - a.percent);
        return dealersEvaluados
     
    } catch (error) {
        throw error;
    }
}


function evaluateDealer(dealer,data){
    var puntos=0
    var puntosTotales=0
    let dealerO = dealer.toObject()
    let objeto= dealerO.credit_requirements
    Object.keys(objeto).forEach((key) => {
        
        if(typeof objeto[key] ==="string"){
            if(objeto[key] != ""){
                if(objeto[key] == data[key]){
                    puntos += 1
                }
                puntosTotales += 1
            }

        }
        console.log(objeto[key],key)
        if(typeof objeto[key] ==="number"){
            if(objeto[key] != 0){
                if(objeto[key] <= data[key]){
                    puntos += 1                 
                }
                puntosTotales += 1
            }
        }
        
    })
    let porcentaje = ((puntos/puntosTotales)*100).toFixed(2)

    let respuesta = {
        _id: dealerO._id,
        name: dealerO.user,
        percent: porcentaje,
        state: dealerO.location.state,
        city: dealerO.location.city
    }
    return respuesta
}



module.exports = {
    addDealer,
    checkDealer,
    recommendedDealers 
}