const axios= require("axios");
const {Country,Activity}= require ("../db");

const searchContinente= async(name)=>{
    //console.log (name);
    
    const countriesBd= await Country.findAll({
        //include: Activity
        include: {
            model: Activity,
            attributes: ["Nombre","Dificultad", "Duracion", "Temporada"],
            through: {
                attributes:[]
            }
        }
    });

    //console.log(countriesBd)
    const searchName= await countriesBd.filter(i => i.Continente.toLowerCase().includes(name.toLowerCase()));
    //console.log (searchName);
    return searchName.length ? searchName : "No se encontro El Continente";


};

const allContinentes= async()=>{
    const countriesBd= await Country.findAll({
        include: {
            model: Activity,
            attributes: ["Nombre"],
            through: {
                attributes:[]
            }
        }


    });
    //console.log(countriesBd);
    return countriesBd;
};

module.exports= {searchContinente, allContinentes};