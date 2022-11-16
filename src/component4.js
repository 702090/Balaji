import { useContext } from "react";
import userContext from "./context";


const Component2=()=> {
  const user = useContext(userContext);
    return (
      <div>
          
          <h1>Welcome to {`Hello ${user} calling!`}</h1>
         
      </div>
    )
  };

export default Component2;