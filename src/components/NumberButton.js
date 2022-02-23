import React from "react";
import utils from "../scripts/utils";

//Status colors
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue'    
};

//Component NumberButton
const NumberButton = (props) => (
    <button 
    className="number" 
    style={{ backgroundColor: colors[props.status]}}
    onClick={() => props.onClick(props.number,props.status)}>
        {props.number}
    </button>
);

export default NumberButton;