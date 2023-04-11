import {useDispatch,useSelector} from "react-redux";
import {getCountriesId} from "../../redux/actions";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./detail.module.css";


const Detail= (props)=>{

  const dispatch= useDispatch();
  
  useEffect(()=>{ //traemos los countries cuando el componete home se monta
    dispatch(getCountriesId(props.match.params.id)) //de actions

  },[dispatch]);
  
  const newStateCountry= useSelector(state =>state.countriesId);
  console.log(props.match.params.id);
  console.log(newStateCountry);


  return(
    <div className= {styles.div}>

      <NavLink className= {styles.nav} to= "/home">
        <button  className= {styles.boton}>HOME</button>
      </NavLink>
      <br />
      <h1 className= {styles.h1}>{newStateCountry.Nombre}</h1>

      <img src={newStateCountry.Imagen} alt="country" />
      <p>ID : {newStateCountry.ID}</p>
      <p>Nombre : {newStateCountry.Nombre}</p>
      <p>Continente :{newStateCountry.Continente}</p>
      <p>Capital :{newStateCountry.Capital}</p>
      <p>Subregion :{newStateCountry.Subregion}</p>
      <p>Area :{newStateCountry.Area}</p>
      <p>Poblacion :{newStateCountry.Poblacion}</p>
      <br />

    </div>

  )
};

export default Detail;