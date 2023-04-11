import axios from "axios";

export const GET_COUNTRIES= "GET_COUNTRIES";
export const GET_COUNTRIES_NAME= "GET_COUNTRIES_NAME";
export const GET_COUNTRIES_ID= "GET_COUNTRIES_ID";
export const GET_ACTIVITIES= "GET_ACTIVITIES";
export const POST_ACTIVITIES= "POST_ACTIVITIES";
export const FILTER_BY_ACTIVITIES= "FILTER_BY_ACTIVITIES";
export const FILTER_BY_CONTINENTE= "FILTER_BY_CONTINENTE";
export const FILTER_BY_POBLACION= "FILTER_BY_POBLACION";
export const FILTER_BY_ZA_AZ= "FILTER_BY_ZA_AZ";
export const FILTER_BY_NAME_COUNTRY= "FILTER_BY_NAME_COUNTRY";


export const getCountries= ()=>{
    return async function (dispatch){
        const baseData= await axios.get("http://localhost:3001/countries");
        const allCountries= baseData.data;
        dispatch({type: GET_COUNTRIES, payload:allCountries});
    }
};

// export const gerCountriesName= (name)=>{
//     return async function (dispatch){
//         try {
//             const baseData= await axios.get(`http://localhost:3001/countries?name=${name}`);
//             const countriesName= baseData.data;
//             dispatch({type: GET_COUNTRIES_NAME, payload:countriesName});

//         } catch (error) {
//             alert(error.response.data.error);
            
//         }
//     }

// };

export const getCountriesId= (payload)=>{
    return async function (dispatch){
        try {
            const baseData= await axios.get(`http://localhost:3001/countries/${payload}`);
            const countriesId= baseData.data;
            dispatch({type:GET_COUNTRIES_ID, payload: countriesId});
            console.log(countriesId);

        } catch (error) {
            alert("Id no encontrado");
            
        }
    }

};
 
export const getActivities= ()=>{
    return async function (dispatch){
        const baseData= await axios.get("http://localhost:3001/activities");
        const allActivities= baseData.data;
        dispatch({type:GET_ACTIVITIES, payload: allActivities});

    }
};

export const postActivities= (payload)=>{
    return async function (dispatch){ //!es necesario poner disp
        try {
            let baseData= await axios.post(`http://localhost:3001/activities`,payload)
            return baseData;
            
        } catch (error) {
            alert("No se Pudo Crear controle que todos los campos esten correctos");
            
        }
        
    }    
};

export const filterByActivities= (payload)=>{ //(e.target.value)
    return async function (dispatch){
        const baseData= await axios.get(`http://localhost:3001/activities?name=${payload}`)
        const activitiesByName=baseData.data;
        dispatch({type:FILTER_BY_ACTIVITIES, payload:activitiesByName});

    }

};

export const filterByContinente= (payload)=>{
    return async function (dispatch){
        const baseData= await axios.get(`http://localhost:3001/continente?name=${payload}`);
        const allContinentes= baseData.data;
        dispatch({type: FILTER_BY_CONTINENTE, payload:allContinentes});
    }
};

export const filterByPoblacion= (payload)=>{
    return async function (dispatch){
        dispatch({type: FILTER_BY_POBLACION, payload:payload});
    }
};
export const filterByZaAz= (payload)=>{
    return async function (dispatch){
        dispatch({type: FILTER_BY_ZA_AZ, payload:payload});
    }
};

export const filterByNameCounty= (payload)=>{
    return async function (dispatch){
        try {
            const baseData= await axios.get(`http://localhost:3001/countries?name=${payload}`);
            const countriesName= baseData.data;
            dispatch({type: FILTER_BY_NAME_COUNTRY, payload:countriesName});
            
        } catch (error) {
            alert("No se encontro el Pais");
            
        }
        // const baseData= await axios.get(`http://localhost:3001/countries?name=${payload}`);
        // const countriesName= baseData.data;
        // dispatch({type: FILTER_BY_NAME_COUNTRY, payload:countriesName});
  
    }

};
 
