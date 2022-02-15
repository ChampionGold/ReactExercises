import React,{useState} from "react";

function Alert(props){

    return(
        <div className="alert alert-danger">{props.message}</div>
    );
}

export default Alert;