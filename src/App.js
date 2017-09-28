import React, { Component } from 'react';
import './App.css';
import PlayerProfile from './PlayerProfile.js';
import {Row, Col, Panel, Button} from 'react-materialize';
import Judging from './Judging';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    player1: [],
    player2: []
  }
  }

//  componentDidMount() {
  lookupPlayer(player_number) {
    console.log(lookup_player)

    var username;

    if (player_number == 1) {
    username = this.player1Inpput.value
    }
    else {
      username = this.player2Input.value
    }

    fetch('https://api.github.com/users/${username}')
    .then(function(response){
      return response.json()
      })
      .then((response) => {
        if (player_number == 1) {
          this.setState({ player1: response })
        } else {
          this.setState({ player2: response})
        }
      })
      .catch(function(error) {
        console.log(error)
      })
    }

  render() {
    return (
      <div>
       <h1> VERSUS HUB </h1>
       <Judging
       player={this.state.player1}
       player2={this.state.player2}
       />

       <Row>
         <Col s={12} m={6}>
         <input ref={(input) => {this.player1.input= input; }}/>
         <Button  waves='light' onCLick= {() => this.lookupPlayer(1)}>CLICK IT! </Button> 
          <PlayerProfile player_data={this.state.player1}/>
         </Col>
     
       <Col s={12} m={6}>
       <input ref={(input) => {this.player2.input= input; }}/>
         <Button  waves='light' onCLick= {() => this.lookupPlayer(2)}>CLICK IT! </Button> 
          <PlayerProfile player_data={this.state.player2}/>
         </Col>
         </Row>
      </div>
    );
  }
}

export default App;
