import React from "react";


const EndGame = (props) => {
    return(
        <div className="star-container">
            <h3>{props.mainMessage}</h3> 
            <button className="btn btn-primary star-restart-button" onClick={() => {props.onEnd()} }> {props.buttonMessage} </button>
        </div>
    );
};

export default EndGame;