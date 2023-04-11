
//import arrayPrue from "./arrayPrue";
import styles from "./Cards.module.css";
import React from "react";
import Card from "../Card/Card";

const Cards=(props)=>{  //props.pages=1,props.cardPerPage=8
    const countries= props.newStateCountry;
    //const countries= arrayPrue;
    //const countries= useSelector(state =>state.country) //miro al  estado global
    return(
        <div className={styles.Cards}>
            {countries.map((country)=>{
                return (
                 <Card
                 id= {country.ID}
                 nombre= {country.Nombre}
                 imagen= {country.Imagen}
                 continente= {country.Continente}
                 //capital= {country.Capital}
                 //subregion= {country.Subregion}
                 //area= {country.Area}
                 //poblacion= {country.Poblacion}
                 //actividad= {country.activities}
                 />
                    
                )
            })} 
        </div>
    )

}
export default Cards;