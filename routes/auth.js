// === Rutas de Usuario |Auth ----HOST + /API/AUTH === //

const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const { validarJWT } = require("../middleware/validar-jwt");

const router = Router();

router.post(
  "/crearUsuario",
  //que sea obligatorio y no vacio
  [
    check("name", "el nombre es oblibatorio").not().isEmpty(),
    check("email", "el nombre es oblibatorio").isEmail(),
    check("password", "el password minimo de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  crearUsuario
);
router.post(
  "/loginUsuario",
  [
    check("email", "el email es obligatorio").isEmail(),
    check("password", "el email es obligatorio").isLength({ min: 6 }),
    validarCampos,
  ],
  loginUsuario
);
//el val jwt si solo es 1
router.get("/revalidarToken", validarJWT, revalidarToken);

module.exports = router;
