const express = require("express");
const cors =require('cors');
const { dbConnection } = require("./database/config");
//PARA REQUERIR A LAS VARIABLES DE ENTORNO | console.log(process.env)
require("dotenv").config();

//INSTANCIASMO APP
const app = express();

//BD
// dbConnection();

//DIRECCIONAMOS A LA VISTA
app.use(express.static("public"));

//LECTURA Y PASEO
app.use(express.json());
app.use(cors());

//RUTAS--
app.use("/new", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));
app.use("/api/requeriments", require("./routes/requeriments"));

//ESCUCHAR EL PUERTO EN .ENV
app.listen(process.env.PORT, () => {
  console.log(`Servidor encendido!!!!  ${process.env.PORT}`);
});



