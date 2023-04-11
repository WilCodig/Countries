//const express= require ("express");

const validate=(req,res,next)=>{
    // const {nombre,dificultad,temporada}= req.body;
    // if(!nombre)return res.status(400).json({error: "Debe Ingresar un Nombre"});
    // if(!dificultad) return res.status(400).json({error:"Debe Ingresar una Dificultad"});
    // if(!temporada) return res.status(400).json({error: "Debe Ingresar un Temporada"});   
    // next();

    //!cambiar duracion y dificulatad a INTEGER en  modelo activity BD e insomia (body) para la siguient validacion
    //!Tambien cambiar en createActivity el if por este => if(!Duracion) Duracion= 0;
    //!Si queremos todos en string cambia las modificacion a la opcion 1(donde este este)

    const {nombre,dificultad,temporada,duracion}= req.body;

    if(!nombre)return res.status(400).json({error: "Debe Ingresar un Nombre"});
    if(!dificultad) return res.status(400).json({error:"Debe Ingresar un nivel de Dificultad"});
    if(!temporada) return res.status(400).json({error: "Debe Ingresar un Temporada"}); 
    if(Number(duracion)){
        if(!(Number(duracion)>=1 && Number(duracion)<=24)) return res.status(400).json({error: "La Duracion debe estar entre 1 y 24 HS"});
    }
    if(Number(dificultad)){
        if(!(Number(dificultad)>=1 && Number(dificultad)<=5)) return res.status(400).json({error: "El rango de dificultad deber estar entre 1 y 5"});
    }
  
    next();
}

module.exports= validate;
