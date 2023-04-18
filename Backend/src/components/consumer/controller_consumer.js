const store = require("./store_consumer");


function addUser(body){
    return new Promise((resolve, reject) => {
        console.log(body)
        if(!body){
            return reject("no hay datos")
        }

        fecha = new Date();
        let user = {
            amount: body.amount,
            price: body.price,
            amountfinance: body.amountfinance,
            typeofresidence: body.typeofresidence,
            credit: body.credit,
            typeofcontract: body.typeofcontract,
            income: body.income,
            zip: body.zip,
            address: body.address,
            city: body.city,
            cellphone: body.cellphone,
            email: body.email,
            name: body.name,
            password: body.password,
        };
        store.addUser(user)
        return resolve("user agregado correctamente")

    })

}



async function checkUser(user, contraseña){
    try {
        let user = await store.getUser({user: user, password: contraseña});
        if(user && contraseña && user != null){
            let sesion = {
                user: user.user,
                id: user.id,
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
    addUser,
    checkUser 
}