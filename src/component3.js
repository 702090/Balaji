
import Component4 from './component4'
import React, { useContext } from "react";
import userContext from './context';

const Component3=()=> {
  const userCustom = useContext(userContext);
    return (
      <div>
          <h1>Component1 {userCustom}</h1>
        
          <Component4/> 
      </div>
    )
  };

export default Component3;