const axios= require("axios");
const {Country,Activity}= require ("../db");

const createActivity= async(Nombre,Dificultad,Duracion, Temporada,country)=>{
    //console.log(Duracion);
    //if(!Duracion) Duracion= 0; //con esto el modelo debe recibir integer
    //if(!Duracion) Duracion="Sin duracion Determinada"; //opcion 1
    
    if (!Duracion){
        Duracion= "Sin duracion Determinada";//con esto el modelo debe recibir string
    }
    else{
        Duracion+= " Hs"; //con esto el modelo debe recibir string
    }
    
    
    const newCreate= await Activity.create({Nombre,Dificultad,Duracion, Temporada}); //mayus el Model recibe asi
    await newCreate.addCountries(country); //!actividad country pasado lo agrego
    // const activityAndCountry= await Activity.findOne({
    //     where: {Nombre: Nombre},
    //     include:{
    //         model: Country,
    //         through: {
    //             attributes:[]
    //         }
    //     }
    // });

    return newCreate;
    
    // console.log(Nombre);
    // const newCreate= await Activity.create({Nombre,Dificultad,Duracion, Temporada});
    // return newCreate;
};

const searchActivity= async(name)=>{
    const activityBd= await Activity.findAll({
        //include: Country
        include: {
            model: Country,
            attributes: ["Nombre","ID"],
            through: {
                attributes:[]
            }
        }
    });

    //console.log(activityBd)
    const searchName= await activityBd.filter(i => i.Nombre.includes(name));
    //console.log (searchName);
    return searchName.length ? searchName : "No se encontro Ninguna Actividad";

    
};


const allActivities= async()=>{
    const activityBd= await Activity.findAll({
        include: {
            model: Country,
            attributes: ["Nombre"],
            through: {
                attributes:[]
            }
        }
    })
    //console.log(countriesBd);
    return activityBd;

    // const activityBd= await Activity.findAll()
    // return activityBd;
    
};

module.exports= {createActivity, searchActivity, allActivities};