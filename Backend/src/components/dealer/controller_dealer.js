const model_customer = require("../consumer/model_customer");
const store = require("./store_dealer");


function addDealer(body){
    return new Promise((resolve, reject) => {
        console.log(body)
        if(!body){
            return reject("no hay datos")
        }

        fecha = new Date();
        let dealer = {
            user:  body.user,
            password: body.password,
            email: body.email,
            phone_number:  body.phone_number,
            location: body.location,
            contact_ids:  body.contact_ids,
            registration_date: fecha,
            credit_requirements: body.credit_requirements
        };
        store.addDealer(dealer)
        return resolve("Dealer agregado correctamente")

    })

}



async function checkDealer(name, contraseña){
    try {
        let dealer = await store.getDealer({name: name, password: contraseña});
        if(name && contraseña && dealer != null){
            let sesion = {
                name: dealer.name,
                id: dealer.id,
                session: true
            };
            return sesion;
        } else {
            throw new Error("datos incorrectos");
        }
    } catch (error) {
        throw error;
    }
}





module.exports = {
    addDealer,
    checkDealer 
}