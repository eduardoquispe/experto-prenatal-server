// desectructuramos
//accedemeos al express.response
const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { generarJwt } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    //RESTRINGIMOS EL EMAIL
    let usuario = await Usuario.findOne({ email: email });
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Un usuario existe con ese correo",
      });
    }
    //REESCRIBIMOS LA VARIABLE
    usuario = new Usuario(req.body);
    //encriptamos el PASSWORD
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);
    await usuario.save();

    const token = await generarJwt(usuario.id, usuario.name);
    console.log(token);

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const loginUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email: email });
    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe",
      });
    }

    // CONFIRMAR PASSWORD
    const validPassword = bcrypt.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(500).json({
        ok: false,
        msg: "Password no valido",
      });
    }
    //GENERAR TOKEN JWT
    const token = await generarJwt(usuario.id, usuario.name);

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};
const revalidarToken = async (req, res = response) => {
  const { uid, name } = req;

  //LLAMAMOS A LA FUNCION DE GENERAR TOKEN
  const token = await generarJwt(uid, name);

  res.json({
    ok: true,
    uid,
    name,
    token,
  });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
