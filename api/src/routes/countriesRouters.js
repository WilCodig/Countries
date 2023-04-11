const {Router}= require ("express");
const countriesGetHandler= require ("../handlers/countriesGetHandler");
const countriesGetIdHandler= require ("../handlers/countriesGetIdHandler");
const activitiesPostHandler= require ("../handlers/activitiesPostHandler");
const activitiesGetHandler= require ("../handlers/activitiesGetHandler");
//const loadingGetHandler= require ("../handlers/loadingGetHandler");
const continentesGetHandler= require("../handlers/continentesGetHandler");//!Prueva
const validate= require ("../controllers/validatorController")

const countriesRouters= Router();

//!defino todas mis rutas

countriesRouters.get("/countries",countriesGetHandler); //!todos y search
countriesRouters.get("/countries/:id", countriesGetIdHandler);
//countriesRouters.get("/countries/name?="); //se une a /countries

countriesRouters.post("/activities", validate, activitiesPostHandler); //!validar  , validate
countriesRouters.get("/activities",activitiesGetHandler); //!todos y search

//countriesRouters.get("/loading", loadingGetHandler);
//!NUEVA RUTA
countriesRouters.get("/continente",continentesGetHandler); //!Prueva


module.exports=countriesRouters;