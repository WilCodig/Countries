//const axios= require ("axios");
const {searchById}= require ("../controllers/countriesController");


const countriesGetIdHandler= async(req,res)=>{
    const {id}= req.params;
    try {
        const countryId= await searchById(id.toUpperCase()); //a mayus
        res.status(200).json(countryId);
        
    } catch (error) {
        res.status(400).json({error:error.message});  
    }
};


module.exports=countriesGetIdHandler;