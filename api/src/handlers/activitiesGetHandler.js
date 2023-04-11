//const axios= require ("axios");
const {searchActivity,allActivities}= require ("../controllers/activitiesController");


const activitiesGetHandler= async(req,res)=>{
    const {name}=req.query;
    try {
        console.log(name);
        const activities= name ? await searchActivity(name.toUpperCase()) : await allActivities();
        res.status(200).json(activities); 

    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports= activitiesGetHandler;