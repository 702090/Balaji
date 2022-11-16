import React from "react";
import Form from "./form";
import './form.css';
import Welcome from "./welcome";
import {
  Routes,
  Route,
} from 'react-router-dom';
import Child from "./child";
import Axios from "./axios";



export default function App() {
 

  return (

    <div className="App">
   <Axios/>

      {/* <Routes>
        <Route exact path = '/' element = {<Form/>}></Route>
        <Route exact path = '/welcome' element = {<Welcome/>}></Route>
      </Routes> */}

    </div>
  
  );
}

