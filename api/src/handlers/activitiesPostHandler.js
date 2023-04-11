//const axios= require ("axios");
const {createActivity}= require ("../controllers/activitiesController");

const activitiesPostHandler= async(req,res)=>{
    const {nombre,dificultad,duracion, temporada,country}= req.body;
    //const {Nombre,Dificultad,Duracion, Temporada, Country}= req.body;


    try {
        //console.log(Nombre);
        const newActivity= await createActivity((nombre.toUpperCase()),Number(dificultad),Number(duracion), temporada, country);
        //const newActivity= await createActivity((nombre.toUpperCase()),dificultad,duracion, temporada, country); //Mayus
        //const newActivity= await createActivity((Nombre.toUpperCase()),Dificultad,Duracion, Temporada, Country);
        res.status(200).json(newActivity);

    } catch (error) {
        res.status(400).json({error: error.message}); 
    }
};


module.exports= activitiesPostHandler;