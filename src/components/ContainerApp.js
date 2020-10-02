import React from 'react'; 

export const ContainerApp = (props) => {    
    return (
        <div className="container">
            <div className="row">
                {props.children}    
            </div>        
        </div>
    ); 
}; 