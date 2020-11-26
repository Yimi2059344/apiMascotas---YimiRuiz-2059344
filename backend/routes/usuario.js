//Controlador Usuario la ruta usuario es donde va tener la promesa cuando le enviemos nuestros datos nos muestre error o exito

//Modulos internos

const express = require("express");
const router = express.Router();

//modulos propios
//definimos la clase usuario
const { Usuario } = require("../model/usuario");

//Rutas
/*metodo para enviar post a traves de una promesa*/
router.post("/", async (req, res) => {
    //preguntamos cuando el usuario exista 
    let usuario = await Usuario.findOne({ correo: req.body.correo });
    //si el usuario existe en la base de datos
    if (usuario) return res.status(400).send("El usuario existe en la BD");
    //si el usuario no existe continua
    usuario = new Usuario({
        //lo que venga del cuerpo del json y  tenga tal propiedad 
        nombre: req.body.nombre,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
    });
    //vamos a guardar el usuario en la BD y generamos el jwt
    const result = await usuario.save();
    const jwtToken = usuario.generateJWT();
    res.status(200).send({ jwtToken });
});

//EXPORTS

module.exports = router;