import React, { Component } from 'react';

class Judging extends Component {
    render() {
        var isPlayer1Ready = !!Object.keys(this.props.player1).length;
        var isPlayer2Ready = !!Object.keys(this.props.player2).length;
        var playersReady = isPlayer1Ready && isPlayer2Ready

        var result;
        if (this.props.player1.followers > this.props.player2.followers) {
            result = 'Player1 wins!!!'
         } else if (this.props.player1.followers < this.props.player2.followers) {
             result = 'Player 2 wins!!!';
         } else { 
             result = "It's a draw!!!";
         }
         return (
             <div>
                 <h6>{playersReady ? <p>{result}</p> :null }</h6>
             </div>    
         )
    }
}

export default Judging; 