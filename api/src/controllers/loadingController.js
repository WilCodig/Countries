const axios= require ("axios");
const {Country}= require ("../db")

const cleanArray= (arr)=>{
    return arr.map(elemento=>{
        //console.log(elemento.area) //.toString()
        return { 
            ID: elemento.cca3,
            Nombre: elemento.name.common,
            Imagen: elemento.flags[1],
            Continente: elemento.continents? elemento.continents[0] : "Continente no Identificado", //!notodos tienen
            Capital: elemento.capital? elemento.capital[0] : "Capital Desconocida", //!notodos tienen
            Subregion: elemento.subregion? elemento.subregion : "Subregion no Identificada", //!notodos tienen
            Area: elemento.area,
            Poblacion: elemento.population,
            
        }
    });
}

const loadingController= async()=>{ //!llega bien
    const countriesApi= (await axios.get("https://restcountries.com/v3/all")).data
    const clearApi= cleanArray(countriesApi);
   
    const countriesBd= await Country.bulkCreate(clearApi); 
    return countriesBd;
    
};
//Country.bulkCreate Pasamos arre de obj (elemento corresponde al registro de la tabla)(cuando hay muchos datos) siempre en muchos a muchos par mantener la integridad de los datos


module.exports= loadingController;

// arroja error
 // const countriesBd= await clearApi.map(elemento=>{
    //     console.log(elemento.id)
    //     Country.create({         
    //         id: elemento.id,
    //         name: elemento.name,
    //         flags: elemento.flags,
    //         region: elemento.region,
    //         capital: elemento.capital,
    //         subregion: elemento.subregion,
    //         area: elemento.area,
    //         population: elemento.population,
            
    //     });
    // return clearApi;
    //return countriesBd;