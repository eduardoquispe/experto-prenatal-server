const { response, request, json } = require("express");
// const Evento = require("../models/Event");

const showRequirements =(req = request, res = response) => {

  res.status(200).json('hola bienvenido 23');

 
};


module.exports = {
    showRequirements
};
