//modulos internos

const mongoose = require("mongoose");

//esquema mascota

const esquemaMascota = new mongoose.Schema({
    //creamos el json del esquema mascotas
    idUsuario: String,
    nombre: String,
    descripcion: String,
    tipo: String,
});

//exports
const Mascota = mongoose.model("mascota", esquemaMascota);
module.exports.Mascota = Mascota;
