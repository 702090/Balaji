
import Component2 from './component2'
import React, { useContext } from "react";
import userContext from './context';

const Component1=()=> {
  const userCustom = useContext(userContext);
    return (
      <div>
          <h1>Component1 {userCustom}</h1>
          <Component2/> 
      </div>
    )
  };

export default Component1;