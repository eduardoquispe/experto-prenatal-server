// === Rutas de Usuario |Auth ----HOST + /API/AUTH === //

const { Router } = require("express");

const {
    showRequirements
  } = require("../controllers/requirements");
const router = Router();



//el val jwt si solo es 1
router.post("/", showRequirements);

module.exports = router;

// mongodb+srv://UserJunior:PJunior@cluster0.zrmff.mongodb.net/test
// mongodb+srv://UserJunior:PJunior@cluster0.zrmff.mongodb.net/DB_Experto