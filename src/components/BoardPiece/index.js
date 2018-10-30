import React from "react";
import RandomGiphy from "../RandomGiphy";
import "./styles.scss";

export default ({ handleMove, value, position }) => {
  return (
    <div className="c-piece" onClick={() => handleMove(position)}>
      {value.player && <RandomGiphy />}
    </div>
  );
};
