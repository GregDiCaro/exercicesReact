import React, {Component } from 'react';


class Result extends Component {

    state ={

        name: "Mario",
        winner: true
    }
    render(){

        return this.state.winner ? <h1>Brave {this.state.name}</h1> : <h1>Rate {this.state.name}</h1>
            
       
        
    }
}

export default Result;
 