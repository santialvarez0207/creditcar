const model_customer = require("../consumer/model_customer");
const store = require("./store_dealer");


function addDealer(body){
    return new Promise((resolve, reject) => {

        if(!body){
            return reject("no hay datos")
        }
        if(store.getDealer({name: body.name, email: body.email})==null){
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
        }
        else{
            return reject("ya existe el usuario")
        }
    })

}



function checkDealer(user,contraseña){
    
}





module.exports = {
    addDealer,
    checkDealer 
}