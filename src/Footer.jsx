import React from "react";
import { NavLink } from "react-router-dom";
const Footer=() => {
    return (
        <>
<footer  className="bg-light text-center">

  <div  className="container p-4 pb-0">
  
  </div>


 
  <div  className="text-center p-3" >
    © 2023 Copyright:
    <NavLink  className="text-dark" to="/"> CoderArpit.com</NavLink>
  </div>
 
</footer>

        </>
    );
}
export default Footer;