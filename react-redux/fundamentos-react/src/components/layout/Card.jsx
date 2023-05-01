import React from "react";
import "./Card.css";

export default props => {

    return (
        <div className="Card">
            <div>{props.titulo}</div>
            <div className="content">
            {props.content}</div>
        </div>
    )
};