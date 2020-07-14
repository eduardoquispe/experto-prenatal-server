const jwt = require("jsonwebtoken");

const generarJwt = (uid, name) => {
  return new Promise((resolve, reject) => {
    //DATOS PARA EL CUERPO DEL JWT
    const payload = { uid, name };
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        //DURACION
        expiresIn: "2h",
      },
      //LUEGO DE FIRMARSE
      (err, token) => {
        if (err) {
          // console.log(err);
          reject("No se pudo generar el jwt");
        }
        resolve(token);
      }
    );
    // SECRET_JWT_SEED
  });
};

//entre llaves si es que se retorna varios
module.exports = { generarJwt };
