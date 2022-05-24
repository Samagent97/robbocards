import React from "react";
import Card from "./Card";

const CardList = ({robbots}) => {

  return( 
        <div>
       {
        robbots.map((user,i) =>{
            return <Card 
            key={i}
             id = {robbots[i].id}
              name={robbots[i].name} 
               email={robbots[i].email}/>  
        }) 
       }
     </div>
    ); 
}
export default CardList; 