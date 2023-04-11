import Cards from "../../Components/Cards/Cards";
import Paginado from "../../Components/Paginado/Paginado";
import NavBar from "../../Components/NavBar/NavBar";
import Filter from "../../Components/Filter/Filter";
//import { useState } from "react";
//import { useSelector} from "react-redux";

import { useEffect, useState } from "react";
import { useDispatch,useSelector} from "react-redux"; //mis hooks
import {getCountries, getActivities} from "../../redux/actions";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";



const Home= ()=>{

  const dispatch= useDispatch();
  
  useEffect(()=>{ //traemos los countries cuando el componete home se monta
    dispatch(getCountries()) //de actions
    dispatch(getActivities()) //de actions
  
  },[dispatch]); //cuando tenga dipacht etonces ejecuto este useeffect, es la condicion del []


  const allCountries= useSelector(state =>state.countries); //traigo mi estado del reducer el segundo estado
  const[pageActual, setPageActual]= useState (1); //numero de pagina donde estoy
  const[countriesViews, serCountriesViews]= useState (10);
  const lastIndex= pageActual * countriesViews; //segundo parametro
  const firstIndex= lastIndex - countriesViews; //primer parameto
  const miximoPage= Math.ceil(allCountries.length/countriesViews); //nose si sera par o inpar
  const newStateCountry= allCountries.slice(firstIndex,lastIndex);

  const paginado=(pageNumber)=>{ //rendirizamos
    setPageActual(pageNumber); //pasamos los numero de las paginas para modificar el estado local
  }

  return (
   <div className={styles.home}>
      <NavBar paginado={paginado}/>
      <br></br>
      {/* <Link to= "/create">Crear Actividad</Link> */}
      <Filter paginado={paginado}/>
      <br></br>
      <Paginado miximoPage={miximoPage} paginado={paginado} />
      <br></br>
      <br></br>
      <Cards newStateCountry={newStateCountry}/>
      <p className={styles.pagina}>Pagina {pageActual}</p>
   </div>
  )
};

export default Home;