import styles from "./Card.module.css";
//import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
//import { getCountriesId } from "../../redux/actions";
import React from 'react';


const Card= (props)=>{
  //const dispatch= useDispatch();

  // const detailCard=(event)=>{
  //   //event.preventdefault();
  //   dispatch(getCountriesId(props.id)); //actions

  // }
  //Link to= {"/Detail/"+ props.id} onClick={(e)=>detailCard(e)}
    
  return (
    <div className={styles.Card}>
      <Link className={styles.link} to= {"/Detail/"+ props.id}>
        <img className={styles.imagen} src={props.imagen} alt="country" />
        <div>
          <p>Nombre: {props.nombre}</p>
          <p>Continente :{props.continente}</p>
          <p>ID :{props.id}</p>

        </div>

      </Link>

        {/* <p>ID :{props.id}</p>
        <p>Nombre: {props.nombre}</p>
        <p>Imagen :{props.imagen}</p>
        <p>Continente :{props.continente}</p>
        <p>Capital :{props.capital}</p>
        <p>Subregion :{props.subregion}</p>
        <p>Area :{props.area}</p>
        <p>Poblacion :{props.poblacion}</p>
        <p>Actividades :{props.actividad}</p> */}
    </div>
  )
}
export default Card;