const Model = require('./model_dealer');


async function getDealer(parameter){
    let dealer = await Model.findOne(parameter)
    return dealer
}


async function addDealer(dealer){
    console.log("store")
    let Mdealer = new Model(dealer)
    await Mdealer.save()
}

async function getDealers(parameter){
    let dealers = await Model.find(parameter)
    return dealers
}

async function updateDealer(parameter,id){
    await Model.updateOne({ _id: id}, parameter)

}


module.exports = {
    getDealer,
    addDealer,
    getDealers,
    updateDealer 
}