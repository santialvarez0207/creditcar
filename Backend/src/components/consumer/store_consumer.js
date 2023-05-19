const Model = require('./model_customer');


async function getUser(parameter){
    let user = await Model.findOne(parameter)
    return user
}

async function addUser(user){
    let Muser = new Model(user)
    await Muser.save()
}

async function getUsers(){
    let users = await Model.find()
    return users
}

module.exports = {
    getUser,
    addUser,
    getUsers 
}