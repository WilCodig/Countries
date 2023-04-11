import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
const Landing= ()=>{
  return (
    <div className={styles.landing}>
      <h1 className={styles.title}>BIENVENIDOS A COUNTRIES</h1>
        <div>
          <Link to= "/home">
            <button className={styles.boton}>INGRESAR</button>
          </Link>
      </div>

    </div>  
        
  )
};

export default Landing;