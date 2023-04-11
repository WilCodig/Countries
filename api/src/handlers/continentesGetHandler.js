//const axios= require("axios");
const {searchContinente,allContinentes}= require("../controllers/continentesController");

const continentesGetHandler= async(req,res)=>{
    const {name}=req.query;

    try {
        const resultSearch= name ? await searchContinente(name) : await allContinentes();
        
        res.status(200).json(resultSearch);

    } catch (error) {
        res.status(400).json({error:error.message});
        
    }

};


module.exports=continentesGetHandler;