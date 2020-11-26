//traer modulos internos

const jwt = require("jsonwebtoken");

//crear una funcion de middleware
function auth(req, res, next) {
    //la autenticacion esta en el header de mi toke
    let jwtToken = req.header("Authorization");
    //el viene con un espacio entonces hacemos una funcion speak, me toma la posicion cero de ese vector
    jwtToken = jwtToken.split(" ")[1];

    //validamos si hay un token
    if (!jwtToken) return res.status(400).send("No existe token para validar");

    //validamos si existe un token

    try {
        const payload = jwt.verify(jwtToken, "clave")
        req.usuario = payload;
        next();
    } catch (error) {
        res.status(400).send("Token no valido sin autorizacion!!");
    }

}


//exports
module.exports = auth;
