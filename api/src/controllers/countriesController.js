//const axios= require ("axios");
const {Country,Activity}= require ("../db")
//necesito la base de Datos

const searchByName= async(name)=>{
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
    const searchName= await countriesBd.filter(i => i.Nombre.toLowerCase().includes(name.toLowerCase()));
    //console.log (searchName);
    return searchName.length ? searchName : "No se encontro El Pais";


    // const searchName = await Country.findAll({
    //     where: {
    //         Nombre: { [Op.iLike]: `%${name}%` } //siempre con where('%ez'termina,'ez%'empieza,'%ez%'contenga)
    //     }, 
    //     include: {
    //         model: Activity,
    //         attributes: ["Nombre"],
    //         through: {
    //             attributes: []
    //         }
    //     },
    // });
    // return searchName;

};

const allCountries= async()=>{
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

const searchById= async(id)=>{
    //const countriesBd= await Country.findAll(id);

    const countriesBd= await Country.findByPk(id,{
        include: {
            model: Activity,
            attributes: ["Nombre","Dificultad", "Duracion", "Temporada"],
            through: {
                attributes:[]
            }
        }
    });
    console.log(countriesBd);

    return id.length===3 ? countriesBd : "No hay un Pais con este ID"; //fitro que tenga solo tres letras
};


module.exports= {searchByName, allCountries, searchById};