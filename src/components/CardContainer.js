import React from 'react';
import Card from './Card';

class CardContainer extends React.Component {
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>{this.props.title}</h2>
                </div>
            </div>

            {this.props.profileList.map(profile => <Card key={profile.id} {...profile} />)}   
        </div>
        );
    }

}

export default CardContainer;