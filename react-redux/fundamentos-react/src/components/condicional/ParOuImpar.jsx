import React from "react";
import parOuImpar from "../../data/parOuImpar";

export default (props) => {
    const isPar = props.numero % 2 === 0
 return (
   <div>
    {isPar?<span>Par</span>:<span>Ímpar</span>}
  </div>
 )
};