//modulos internos   

const express = require("express");
const mongoose = require("mongoose");

//modulos propios
//consumimos las rutas
const usuario = require("./routes/usuario");
const auth = require("./routes/auth");
const mascota = require("./routes/mascota");

//App
const app = express();
app.use(express.json());    

//definimos las rutas de las api
app.use("/api/usuario", usuario);
app.use("/api/auth", auth);
app.use("/api/mascota", mascota);



//puerto de ejecucion
const port = process.env.port || 3002;
app.listen(port, () => console.log("escuchando el puerto: " + port));

//definir funcion mongoose le decimos cual es nuestro punto de conexion (base de datos)
mongoose.connect("mongodb://localhost/apiMascotas", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,

})


    .then(() => console.log("conexion con mongo Ok!!"))
    .catch((error) => console.log("Fallo la conexión!!" + error));
