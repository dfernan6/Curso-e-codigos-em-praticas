import React from "react";
import "./Card.css";

export default props => {

    const cardStyle = {
        backgroundColor: props.color,
        borderColor: props.color
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="title">
             {props.titulo}</div>
            <div className="content">
            {props.children}</div>
        </div>
    )
};