const { Router } = require("express");
const { validarJWT } = require("../middleware/validar-jwt");
const { check } = require("express-validator");
const { isDate } = require("../helpers/isDate");
const {
  showEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");

const {
  showRequirements
} = require("../controllers/requirements");

const { validarCampos } = require("../middleware/validar-campos");
const router = Router();
//Todos los que estan debajo estarna pasando por el JWT
router.use(validarJWT);
router.get("/", showEvent);
router.get("/requirements",showRequirements);


router.post(
  "/create",
  [
    //isDate es un collback para validar la fecha
    check("title", "Este title es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio obligatorio").custom(isDate),
    check("end", "Fecha de fin obligatorio").custom(isDate),
    validarCampos,
  ],
  createEvent
);
router.put(
  "/:id",
  [
    //isDate es un collback para validar la fecha
    check("title", "Este title es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio obligatorio").custom(isDate),
    check("end", "Fecha de fin obligatorio").custom(isDate),
    validarCampos,
  ],
  updateEvent
);
router.delete("/:id", deleteEvent);

module.exports = router;
