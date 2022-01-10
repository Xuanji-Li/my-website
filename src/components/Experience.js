import React from 'react';
import "./Experience.css";

function Experience({title,smTitle,period,children}){
    return(
        <div>
             <h1>{title}</h1>
             <p>{smTitle}</p>
             <p>{period}</p>
            {children}
        </div>
           
        
    );
}
export default Experience;