const express = require("express");
const router_dealer = require("../components/dealer/network_dealer");



const routes = function (server){
    server.use('/api/dealer', router_dealer)
}



module.exports = routes;