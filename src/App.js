import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';

function App() {
  
  return (
   <div>
     <React.Fragment>
       <Route exact path="/" component={Home}/>
     </React.Fragment>
   </div> 
  )
}

export default App;
