import React from "react";



const Card = ( {name, email, id}) => {
    
    return (
        <div className='tc bg-light-green dib br2 pa2 ma1 grow bw1'> 
            
            <img alt="robbots" src={`https://robohash.org/${id}?set=set2`} /> 
                <div>
                <h2>{name}</h2>
                <p>{email}</p> 
            </div>

       </div>
    );
}

export default Card; 