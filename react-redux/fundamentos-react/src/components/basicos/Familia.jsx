import React, { cloneElement } from "react";

export default props => {

    return (
        <div>
            <h2>Membros da família</h2>
            {props.children.map((child, i) => {
                return cloneElement(child, {...props, key: 1});
            })}
        </div>
    );
};