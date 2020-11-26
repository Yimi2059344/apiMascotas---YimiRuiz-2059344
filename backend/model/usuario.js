//modulos internos
const mongoose = require("mongoose");
const jwt =  require("jsonwebtoken");

//esquema de la coleccion usuarios
const esquemaUsuario = new mongoose.Schema({
    nombre: String,
    correo: String,
    contrasena: String,
});

//generar el jsonwebtoken con el esquemaUsuario

esquemaUsuario.methods.generateJWT = function () {
    return jwt.sign({
        /*NOTAS:
   mongo nos crea un id por defecto]*/
        _id: this._id,
        nombre: this.nombre,
        correo: this.correo,

    }, "clave");
};
/*EXPORTS*/
const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;
module.exports.esquemaUsuario = esquemaUsuario;
