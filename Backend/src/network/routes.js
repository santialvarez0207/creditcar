const express = require("express");
const router_dealer = require("../components/dealer/network_dealer");
const router_car = require("../components/car/network_car");
const router_customer = require("../components/consumer/network_consumer");

const routes = function (server){
    server.use('/api/dealer', router_dealer)
    server.use('/api/car', router_car)
    server.use('/api/customer', router_customer)
}



module.exports = routes;