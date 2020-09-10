import React, { Component } from 'react';
import Toto from './Toto';

class Maman extends Component {

    state = {

        messageMaman: null,
        messageToto: null

    }

    ordreMaman = () => {

        this.setState({

            messageMaman: 'va ranger ta chambre ou je te tue yala'
        })
    }

    reponseToto = () => {
        this.setState({

            messageToto: 'daccord '
        })
    //   console.log('d accord test');
    }
    render(){

        return(

            <div>

                <h1>Maman</h1>

                <button onClick={this.ordreMaman}>order de la mere</button>
                <p>{this.state.messageMaman}</p>
        
                <hr />

                <Toto name="Toto" reponseToto={this.reponseToto} leState={this.state}/>

                
            </div>
        )
    }
}

export default Maman;