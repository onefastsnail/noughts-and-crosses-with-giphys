import React from "react";
import BoardPiece from "../BoardPiece";
import "./styles.scss";

export default ({ size, handleMove, moves }) => {
  const sqrt = Math.sqrt(parseInt(size));
  if (sqrt % 1 != 0) return false;
  const array = [...Array(sqrt)];
  let counter = -1;

  return (
    <div className="l-board">
      <div className="l-board__inner">
        {array.map((_, index) => {
          return (
            <div className="l-board__row" key={index}>
              {array.map((_, index) => {
                ++counter;
                return (
                  <div className="l-board__row__item" key={index}>
                    <BoardPiece
                      position={counter}
                      value={moves[counter] || null}
                      handleMove={handleMove}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
