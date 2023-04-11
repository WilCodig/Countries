const { Router } = require('express');
const countriesRouters= require("./countriesRouters")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", countriesRouters); //!redirecionamos todas las rutas

module.exports = router;
