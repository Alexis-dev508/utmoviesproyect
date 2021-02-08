import React from "react";
//////////////////////////////Peliculas///////////////////////////////
function Peliculas(props){
 
    return(
      <div className={props.className}>
        <h3><a href="www.google.com">{props.movieName}</a></h3>
      </div>
    );

    }
    export default Peliculas

   