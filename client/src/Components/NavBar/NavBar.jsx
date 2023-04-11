import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import {useDispatch} from "react-redux";
import {getCountries} from "../../redux/actions";
//import Search from "../../Components/Search/Search";
 

const NavBar=(props) =>{
  const dispatch= useDispatch()

  const handlerReinicial=(e)=>{
    e.preventDefault();
    dispatch(getCountries())
  };
  return (
    <div className= {styles.nav}>
            
      <NavLink to= "/home">
         <button  className= {styles.botones} >HOME</button>
      </NavLink>

      <NavLink to= "/create">
        <button className= {styles.botones}>Crear Actividad</button>
      </NavLink>
            
      <button className= {styles.botones} onClick={()=>props.paginado(1)}>Reiniciar Paginas</button>
      <button className= {styles.botones} onClick={handlerReinicial}>Refresh</button>
      {/* <Search/> */}
            
    </div>
  )
}

export default NavBar;