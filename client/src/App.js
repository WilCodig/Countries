import './App.css'; //solo al inicio
import Home from './Views/Home/Home';
import Landing from './Views/Landing/Landing';
import Detail from './Views/Detail/Detail';
import Form from './Views/Form/Form';
import {Route, useLocation} from "react-router-dom"; //para poder usar el useLocation
//import NavBar from './Components/NavBar/NavBar';


function App() {
  //const location =useLocation();
  // console.log(location); 
  return (
    <div className="App">
      {/* {location.pathname !=="/" && <NavBar/>}  */}

      <Route exact path= "/" component={Landing}/>
      <Route exact path= "/home" component={Home}/>
      <Route exact path= "/detail/:id" component={Detail}/>
      <Route exact path= "/create" component={Form}/>
      {/* <Route path="*" component={Home} /> para que mi ruta distintas a las que tengo arriba me lleve al home */}
       
    </div>
  );
}

export default App;
