import React from "react";
import utils from "../scripts/utils";

class StarMatchGame extends React.Component
{   
    render(){
        return(
            
            <div className="container">
                {/*Title and instructions*/}
                <div className="row">
                    <div className="col-md-12">
                        <h1>Star Game Match!</h1>
                        <h2>Pick 1 or more numbers that sum to the number of stars</h2>
                    </div>
                </div>

                {/*Game*/}
                <div className="row">
                    <div className="col-md-6 star-match-container">
                        <div className="star" />
                    </div>
                    <div className="col-md-6 star-match-container">
                        {utils.range(1,9).map(number => <button className="number">1</button>)}
                    </div>
                </div>

                {/*Timer*/}
                <div className="row">
                    <div className="col-md-12">
                        <div className="star-match-timer">Time left: 666</div>
                    </div>
                </div>

            </div>

            

        );
    };
}

export default StarMatchGame;