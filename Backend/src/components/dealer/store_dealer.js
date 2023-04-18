const Model = require('./model_dealer');


async function getDealer(parameter){
    let dealer = Model.findOne(parameter)
    return dealer
}


async function addDealer(dealer){
    let Mdealer = new Model(dealer)
    await Mdealer.save()
}

async function getDealers(){
    let dealers = await Model.find()
    return dealers
}



module.exports = {
    getDealer,
    addDealer,
    getDealers 
}