import React from 'react'

function SimonGame() {
  return (
    <div className="container container-game">
      <div className="row row-game">
        <div
          //   onClick="SimonGame.gameBoardPress()"
          id="box-0"
          className="col"
        ></div>
        <div
          //   onClick="SimonGame.gameBoardPress()"
          id="box-1"
          className="col"
        ></div>
      </div>
      <div className="row row-game">
        <div
          //   onClick="SimonGame.gameBoardPress()"
          id="box-2"
          className="col"
        ></div>
        <div
          //   onClick="SimonGame.gameBoardPress()"
          id="box-3"
          className="col"
        ></div>
      </div>
    </div>
  )
}

export default SimonGame
