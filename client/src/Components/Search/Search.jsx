import { useState } from "react";
import { useDispatch } from "react-redux";
import {filterByNameCounty} from "../../redux/actions";
import styles from "./Search.module.css"


const Search= (props)=>{
    const [search,setSearch]= useState(""); //donde voy llenado el ESTADO BUSQUEDA
    const dispatch= useDispatch();

    const setearBusqueda= (e) => { //cargo todas las letras(palabras) de la busqueda
        setSearch(e.target.value);
    }
    const handleFilterNameCounty= (e)=>{
        //e.preventDefault()
        props.paginado(1);
        dispatch(filterByNameCounty(search)); //le paso el valor de mi estado de busqueda
        setSearch (""); //vacio mi estado de busqueda para una nueva busqueda

        
    };
    
    // const handleEnter= (e)=>{ //ejecuto el enter como evento
    //     if(e.key==="Enter"){
    //         handleFilterNameCounty(e) //ejecuto onchage con su evento
    //     };
    // };

    //name="Enter" onKeyPress={(e) => handleEnter(e)} 

    return(
        <div className={styles.dive}>
            <input className={styles.dive} type= "text" value={search} onChange={(e) => setearBusqueda(e)} />
            <button className={styles.boton} type="submit" onClick={(e) => handleFilterNameCounty(e)}>Buscar</button>
            {/* <br />
            <a> Result of: {search}</a> */}
        </div>
    )
};

export default Search;
