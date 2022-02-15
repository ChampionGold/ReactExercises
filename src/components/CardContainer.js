import React from 'react';
import Card from './Card';

function CardContainer(props){
    
    return(
        <div className="container">
        
         {/* Title */}
            <div className="row">
                <div className="col-md-12">
                <h2>{props.title}</h2>
                </div>
            </div>

        {/* Cards */}
        {props.profileList.map(profile => <Card key={profile.id} {...profile} />)}   
        
        
        </div>
    );
    
 
}


export default CardContainer;