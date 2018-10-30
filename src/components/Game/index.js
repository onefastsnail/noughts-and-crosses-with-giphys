import React from "react";
import Board from "../Board";

export const move = {
  player: null,
  image: null
};

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moves: Array.from(Array(parseInt(this.props.size))).map(() => ({
        ...move
      })),
      currentPlayer: 1
    };

    this.handleMove = this.handleMove.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
  }

  // A mutation happens in this function, can you fix me?
  handleMove(position) {
    this.setState(state => {
      const moves = [...state.moves];
      moves[position].player = state.currentPlayer;
      return {
        moves,
        currentPlayer: state.currentPlayer == 1 ? 2 : 1
      };
    }, this.checkForWin);
  }

  checkForWin() {}

  render() {
    return (
      <Board
        size={this.props.size}
        moves={this.state.moves}
        handleMove={this.handleMove}
      />
    );
  }
}
