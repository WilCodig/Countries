//const axios= require("axios");
const {searchByName,allCountries}= require("../controllers/countriesController");

const countriesGetHandler= async(req,res)=>{
    const {name}=req.query;
    //const {continente}=req.query;

    try {
        const resultSearch= name ? await searchByName(name) : await allCountries();
        
        res.status(200).json(resultSearch);

    } catch (error) {
        res.status(400).json({error:error.message});
        
    }

};


// const countriesGetHandler= (req,res)=>{
//     res.send("Busque por nombre y todos");
// };



module.exports=countriesGetHandler;