import React from "react";
import { Route, Switch, useLocation} from "react-router-dom";
//STYLES
import './assets/index.scss';
//COMPONENTS
import Landing from './components/Landing/Landing';
import Navbar from "./components/Navbar/Navbar";
import Loign from "./components/Login/Login"
import Menu from "./components/Menu/Menu"

function Main(){
    const location = useLocation().pathname;
    return(
        <div>
         {location === "/" ? null : <Navbar/>}  
         <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route path="/login" component={Loign}></Route>
         </Switch>
         {location === "/" ? null : <Menu/>}  
     </div>
    )
}

export default Main





