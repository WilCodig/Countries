import { useDispatch,useSelector } from "react-redux";
import {filterByActivities}  from "../../redux/actions";
import {filterByContinente} from "../../redux/actions";
import {filterByPoblacion} from "../../redux/actions";
import {filterByZaAz} from "../../redux/actions";
//import {filterByNameCounty} from "../../redux/actions";
import Search from "../Search/Search";
import styles from "./Filter.module.css";

const Filter=(props)=>{
    //pageActual={pageActual} 1 paginado={paginado} 1 miximoPage={miximoPage}25
    const activities= useSelector(state =>state.activities);
    const continentes= useSelector(state =>state.country); // del estado que no se modifico

    const allName= activities.map(a=>a.Nombre); //quiero solo los nombres
    const names=[];

    for(let i=0; i<allName.length; i++){
        const activityName= allName[i]
        if(!names.includes(activityName)){
            names.push(activityName);
        }
    }

    const allContinente = continentes.map(a=>a.Continente); //quiero solo los nombres
    const namesContinente=[];

    for(let i=0; i<allContinente.length; i++){
        const contName= allContinente[i]
        if(!namesContinente.includes(contName)){
            namesContinente.push(contName);
        }
    }


    const dispatch= useDispatch();

    const handleActivities=(e)=>{
        props.paginado(1);
        dispatch(filterByActivities(e.target.value));
        
    };

    const handleContinentes=(e)=>{
        props.paginado(1);
        dispatch(filterByContinente(e.target.value));
        
    };

    const handleFilterPoblacion=(e)=>{
        props.paginado(1);
        dispatch(filterByPoblacion(e.target.value));
        
    };

    const handleFilterZaAz=(e)=>{
        props.paginado(1);
        dispatch(filterByZaAz(e.target.value));
        
    };

    return(
        <nav className={styles.nav}>
            <select className={styles.selectores} onChange={e=>handleActivities(e)}>
              {
                names.length && names.map(n =>{
                    return(
                        <option className={styles.opciones} value={`${n}`}>{`${n}`}</option>
                    )
                } )
              }
            </select>

            <select className={styles.selectores} onChange={e=>handleContinentes(e)}>
              {
                namesContinente.length && namesContinente.map(c=>{
                    return(
                        <option className={styles.opciones}  value={`${c}`}>{`${c}`}</option>
                    )
                } )
              }
            </select>

            <select className={styles.selectores} onChange={e=>handleFilterPoblacion(e)}>
             <option className={styles.opciones} value="ascendente">Orden Ascendente Poblacion</option>
             <option className={styles.opciones} value="descendente">Orden Descendente Poblacion</option>
            </select>

            <select className={styles.selectores} onChange={e=>handleFilterZaAz(e)}>
              <option className={styles.opciones} value="az">Orden AZ Countries</option>
              <option className={styles.opciones} value="za">Orden ZA Countries</option>
            </select>
            <br />
           
            <Search paginado={props.paginado}/>
        
        </nav>

    )
    
};

export default Filter;