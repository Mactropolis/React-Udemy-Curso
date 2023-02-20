import React from "react";

export default (props) => {
  const { min, max } = props;

  var rand = (min + Math.random() * (max - min)).toFixed(2);
  return (
    <div>
      <h3>
        Minimo : {min} <br />{" "}
      </h3>
      <h3>
        Máximo : {max} <br />
      </h3>
      <h3>
        Valor Escolhido :<strong> {rand} </strong>
      </h3>
    </div>
  );
};
