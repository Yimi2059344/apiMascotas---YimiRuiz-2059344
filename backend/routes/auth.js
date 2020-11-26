//modulos internos
const express = require("express");
const router = express.Router();

//modulos propios
//definimos la clase usuario
const { Usuario } = require("../model/usuario");

//Tutas


router.post("/", async (req, res) => {
    //preguntamos cuando el usuario exista 
    let usuario = await Usuario.findOne({ correo: req.body.correo });
    //si el usuario existe en la base de datos
    if (!usuario) return res.status(400).send("Datos invalidos");
    //si existe el usuario
    if (usuario.contrasena != req.body.contrasena) return res.status(400).send("Datos invalidos");

    //si  pasa generamos el jwt
    const jwtToken = usuario.generateJWT();
    res.status(200).send({ jwtToken });
});

//exports
module.exports = router;
