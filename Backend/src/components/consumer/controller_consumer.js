const store = require("./store_consumer");



async function addUser(body) {
    try {
        if(!body){
            return false
        }
        let ExistingUser = await store.getUser({email : body.email})
        if(ExistingUser){
            return false
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
        return true
    } catch (error) {
        throw error;
    }
}

async function updateUser(body,id){
    try {
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
        }
        store.updateUser(user, id)
        return "se actualizo correctamente"
    } catch (error) {
        throw error;
    }
}

async function getUser(id) {
    try {
        let user = await store.getUser({_id: id});
        console.log(user);
        return user
    } catch (error) {
        throw error;
    }
}


async function checkUser(email, password) {
    try {
        console.log(email,password)
        let user = await store.getUser({email: email, password: password});
        if(email && password && user != null){
            let sesion = {
                name: user.name,
                id: user.id,
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


module.exports = {
    addUser,
    checkUser,
    getUser,
    updateUser
    
}