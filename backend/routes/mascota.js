//modulos internos
const express = require("express");
const router = express.Router();

//modulos propios
//definimos la clase usuario
const { Usuario } = require("../model/usuario");
//definimos la clase mascota
const { Mascota } = require("../model/mascota");

const auth = require("../middleware/auth");


//Rutas de mascotas aqui  hay un  cambio
//post por que vamos a enviar 
router.post("/", auth, async (req, res) => {
    //tomar  el usuario si  existe
    const usuario = await Usuario.findById(req.usuario._id);
    let mascota2 = await Mascota.findOne({ tipo: req.body.tipo });
    //si  el  usuario no existe
    //if (!mascota) return res.status(400).send("La mascota ya existe");
    if (!usuario) return res.status(400).send("El usuario no existe");
    if (mascota2) return res.status(400).send("La mascota ya existe");
    const mascota = new Mascota({
        idUsuario: usuario._id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        tipo: req.body.tipo,
    });

    const result = await mascota.save();
    res.status(200).send(result);
});

//exports
module.exports = router;