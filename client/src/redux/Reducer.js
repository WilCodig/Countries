import { GET_COUNTRIES } from "./actions";
import {GET_COUNTRIES_NAME} from "./actions";
import {GET_COUNTRIES_ID} from "./actions";
import {GET_ACTIVITIES} from "./actions";
import {POST_ACTIVITIES} from "./actions";
import {FILTER_BY_ACTIVITIES} from "./actions";
import {FILTER_BY_CONTINENTE} from "./actions";
import {FILTER_BY_POBLACION} from "./actions";
import {FILTER_BY_ZA_AZ} from "./actions";
import {FILTER_BY_NAME_COUNTRY} from "./actions";

const initialState={
  country: [], //general
  countries:[], //para el paginado
  activities:[], //general
  countriesId:[],
  activitiesName:[] //para el filtro
};
const rootReducer= (state= initialState, action)=>{
  switch(action.type){
        
    case GET_COUNTRIES: return{...state, country: action.payload, countries: action.payload}; //payload:allCountries en actions
        
    case GET_ACTIVITIES: return {...state, activities: action.payload}; //payload: allActivities

    case GET_COUNTRIES_NAME: return {...state, countries: action.payload}; //payload:countriesName
        
    case GET_COUNTRIES_ID: return {...state, countriesId: action.payload}; //payload: countriesId
        
        
    case POST_ACTIVITIES: return {...state}

    case FILTER_BY_ACTIVITIES: 

      const activitiesId= action.payload.map(a=>a.countries[0].ID) //podria hacer un for si tenga mas ids
      const allIds=[];
        
      state.country.filter(e=>activitiesId.includes(e.ID) && allIds.push(e) )//traigo mi estado general
           
      return{...state, countries:allIds}; //en el estado countries pq lo usa HOME en el paginado
        
    case FILTER_BY_CONTINENTE:
      const continentesId= action.payload.map(a=>a.ID) //id de country
      const countriesIds=[];
        
      state.country.filter(e=>continentesId.includes(e.ID) && countriesIds.push(e) )//traigo mi estado general
           
      return{...state, countries:countriesIds}; //en el estado countries pq lo usa HOME en el paginado

    case FILTER_BY_POBLACION:
      const poblacionOrden = action.payload === "ascendente" ? //voy de menor a mayor
        [...state.countries].sort(function (a, b) {
          if (a.Poblacion > b.Poblacion) {
            return 1
          }
          if (b.Poblacion > a.Poblacion) {
            return -1
          }
          return 0
        }) :
        [...state.countries].sort(function (a, b) {
          if (a.Poblacion > b.Poblacion) {
            return -1
          }
          if (b.Poblacion > a.Poblacion) {
            return 1
          }
          return 0
        })
      return {...state,countries: poblacionOrden};

    case FILTER_BY_ZA_AZ:
      const azOrden = action.payload === "az" ?
        [...state.countries].sort(function (a, b) {
          if (a.Nombre > b.Nombre) {
            return 1
          }
          if (b.Nombre > a.Nombre) {
            return -1
          }
          return 0
        }) :
        [...state.countries].sort(function (a, b) {
          if (a.Nombre > b.Nombre) {
            return -1
          }
          if (b.Nombre > a.Nombre) {
            return 1
          }
          return 0
        })
      return {...state,countries: azOrden};

    case FILTER_BY_NAME_COUNTRY: //!falta definir la logica con el [nombre]
      const nameCountryId= action.payload.map(c=>c.ID) //id de countries del filtrado por nombre
      const namesId=[];
      
      state.country.filter(e=>nameCountryId.includes(e.ID) && namesId.push(e) )//traigo mi estado general
           
      return{...state, countries:namesId};

    default: return {...state};

  }

};

export default rootReducer;