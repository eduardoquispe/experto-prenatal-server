const { response, request } = require("express");
const jwt = require("jsonwebtoken");

const validarJWT = (req = request, res = response, next) => {
  const token = req.header("x-token");
  //Validamos si no hay token
  if (!token) {
    res.status(401).json({
      ok: false,
      msg: "el token no exite",
    });
  }

  try {
    //================ VERIFICANDO TOKEN ===================//
    const payload = jwt.verify(token, process.env.SECRET_JWT_SEED);
    req.uid = payload.uid;
    req.name = payload.name;
    //==========================//
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token no válido",
    });
  }

  //   console.log(token);
  next();
};

module.exports = { validarJWT };
