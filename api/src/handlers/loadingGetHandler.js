const axios= require ("axios");
const loadingController= require("../controllers/loadingController");


const loadingGetHandler= async(req,res)=>{ //!llega bien
    try {
        const loading= await loadingController();
        res.status(200).json(loading);
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }

};

module.exports= loadingGetHandler;