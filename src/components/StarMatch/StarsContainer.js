import React from "react";
import utils from "../../scripts/utils";
import EndGame from "./EndGame";

const StarsContainer = (props) => {
    let gameStatus = props.gameStatus;

    //Renders stars or other stuff depending on the status of the game:

    if(gameStatus === 'won'){//If game has been won, renders a congratulations message and button of restart
        return(<EndGame mainMessage="Congratulations! You've won!" buttonMessage="Nice, let's do it again!" onEnd={props.onEnd}/>)
    }
    else if(gameStatus === 'lost'){//If user lost the game, renders a lost message and button of restart
        return(<EndGame mainMessage="Aw man! You've lost! Git Gud, yo!" buttonMessage="Argh! Fine, let's try again!" onEnd={props.onEnd}/>)
    }
    else //If game is still active, renders stars.
    {
        return(
            <div className="star-container">
                {utils.range(1,props.stars).map(starId => <div key={starId} className="star" />)}
            </div>
            );
    }
};

export default StarsContainer;