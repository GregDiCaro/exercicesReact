import React, {Component } from 'react';
import Life from './Life';
import './App.css';

class App extends Component {

  state = {

      display: true 
  }

  deleteOrDisplay =() => {

      if(this.state.display){

        this.setState({

          display: !this.state.display
        
        })
      }
  }
  render(){

    const showComponent = this.state.display ? ( <Life  name="toto2"/>) : (<div></div>);

    return (
      <div className="App">
        
       { showComponent}

        <button onClick={this.deleteOrDisplay}>cliquez ici </button>
      </div>
    );
  }
  
}

export default App;
