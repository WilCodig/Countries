import styles from "./Form.module.css";
//import axios from "axios";
import { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {getCountries} from "../../redux/actions";
import{postActivities} from "../../redux/actions";


const validate = (input) => { //regex - y + que no se pueda 
  let error = {};
  //nombre
  if(!(/^[a-z]{0,12}$/i.test(input.nombre))){
    error.nombre = "Debe contener 12 caracteres, sin numero ni caracteres especiales"     
  }if(!input.nombre){
    error.nombre = "Ingresar nombre"
  }

  //dificultad
  if(!input.dificultad){
    error.dificultad = "Ingresar dificultad"
  }
  if(!(input.dificultad >0 && input.dificultad<7)){
    error.dificultad = "Debe ingresar un valor entre 1 y 5"
  }

  //duracion
  if(!input.duracion){
    error.duracion = "Ingresar duracion"
  }
  if(!(/^[1-9]{0,2}$/.test(input.duracion) && input.duracion < 25 )){
    error.duration = "La duración debe ser de 1 a 24 horas"
  }

  //temporada
  if(!input.temporada){
    error.temporada = "Seleccionar temporada"
  }
  if(input.country.length === 0){
    error.country = "Ingrese por lo menos un country"    
  }
  return error;
}

export default function Form(){

  const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries)
  const [error, setError] = useState({});

  const [input, setInput] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    country: []
  })


  const handleChange = (e) => {
    setError(validate({
      ...input, 
      [e.target.name]: e.target.value
    }));
    setInput({
      ...input, 
      [e.target.name] : e.target.value
    });
    console.log(input)
  }

  const handleSelect = (e) => {
    setInput({ ...input, country: [...input.country, e.target.value]})
    setError(validate({ ...input, country: [...input.country, e.target.value]}))  
  }

  const handleSubmit = (e) => {

    if(!input.nombre && !input.dificultad & !input.dificultad && !input.temporada && !input.country.length) {
      alert("Verifique los Datos")
    } else {

      e.preventDefault()
      console.log(input)
      setError(validate({...input, [e.target.name]: e.target.value}));
      dispatch(postActivities(input))
      alert('Creando Actividad......')
                          
      setInput({
        nombre: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        country: []
      })
                             
    }
         
                
  }

  const handleDelete = (e) => {
    setInput({ ...input, country: input.country.filter(c => c!==e)})
      
  }

  useEffect(() => {
    dispatch(getCountries())
  },[dispatch])

  return(
      
    <div className= {styles.formcon}>
             
      <div>
        <Link className= {styles.nav} to='/home'>
          <button className= {styles.boton} >Home</button>
        </Link>
      </div>
      <h1 className= {styles.h1}>Crear Actividad</h1>
              
      <div >

        <form  onSubmit={(e) => handleSubmit(e)}>
          <div className= {styles.items}>
            <label>Nombre</label>
            <input type='text' value={input.nombre} name='nombre' onChange={(e) => handleChange(e)}></input> 
            <br />                           
            {error.nombre && <span className= {styles.span}>{error.nombre}</span>}
          </div>
                      
                              
          <div className= {styles.items} >
            <label >Dificultad</label>
            <input  type="number" value={input.dificultad} name = 'dificultad' onChange={(e) => handleChange(e)}></input>  
            <br />                          
            {error.dificultad && <span className= {styles.span}>{error.dificultad}</span>}
          </div>
                      

          <div className= {styles.items} >
            <label >Duracion</label>
            <input type='number' value={input.duracion} name = 'duracion' onChange={(e) => handleChange(e)}></input>   
            <br />                         
            {error.duration && <span className= {styles.span}>{error.duracion}</span>}
          </div>
                          
                              
          <div className= {styles.items} >
            <label >Temorada</label>
            <select  className= {styles.selectores}  name='temporada' onChange={(e) => handleChange(e)}>
              <option value={"Verano"}>Verano</option>
                <option value={"Otoño"}>Otoño</option>
                <option value={"Invierno"}>Invierno</option>
                <option value={"Primavera"}>Primavera</option>
            </select>
            <br />
            {error.temporada && <span className= {styles.span}>{error.temporada}</span>}
          </div>
                      
                      
          <div className= {styles.items} >

            <label >Countries</label>
            <select className= {styles.selectores} name='paises' onChange={e=>handleSelect(e)}>
                              
              {countries.map((c)=>( 
                <option value={c.ID}>{c.Nombre}</option>  //ordenar por orden alfabetico
              ))}
            </select>   
            <br /> 
            {error.country && <span className= {styles.span}>{error.country}</span>}
          </div>

          {input.country.length === 0 && 
            <div>
              <ul><li>{input.country.map(el => el + " ,")}</li></ul>                        
            </div>
          }
                      
          <br />
          <button className= {styles.butonCrear} type="submit">Crear Actividad</button>                        
                          
        </form>

      </div>
              
      {/* <div>
        {input.country.map((e) => (
          <ul><h4>{e}</h4><button onClick={()=>handleDelete(e)}>X</button></ul>                          
        ))}               
      </div> */}
    </div>

          
  )
}