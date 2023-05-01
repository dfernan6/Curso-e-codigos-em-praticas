import React from "react";

export default (props) => {
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
        <h2>Valor aleatório</h2>
        <p>
            Valor minimo: {min}
        </p>
        <p>
            Valor maximo: {max}
        </p>
        <p>
            Valor Escolhido: {aleatorio}
        </p>
    </div>
  );
};