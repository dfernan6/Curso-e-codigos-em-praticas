import React, { cloneElement } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    return (
        <div>
            <h2>Membros da família</h2>
            {props.children.map((child) => {
                return cloneElement(child, {...props, key: 1});
            })}
        </div>
    );
};