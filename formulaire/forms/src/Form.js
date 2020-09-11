import React, {Component} from 'react';
import Car from './Car';

class Form extends Component {

    state = {

        username : "",
        color: "",
        colors: ["","red","blue","green","black","pink"],
        comment: ''
    }

    handlePseudo = e => {

           this.setState({

                username: e.target.value
           })
    }

    handleColor = e => {

            this.setState({

                color: e.target.value
            })
           
    }

    handleComments = e => {

        this.setState({

            comment: e.target.value
        })

    }
    handleSubmitForm = e => {

        // this.setState({

        //     submit: e.target.value
        // })

        e.preventDefault();

        console.log(`username : ${this.state.username} couleur: ${this.state.color} comment: ${this.state.comment}`);
    }

    render(){

        return (
        
        <div>

            <Car color={this.state.color} height="400"/>
            <h1>Commentaire </h1>
            <form onSubmit={this.handleSubmitForm}>

                <div>
                    <label>Pseudo</label>
                    <input type="texte" value={this.state.username}  onChange={this.handlePseudo}/>
                </div>

                <div>
                <label>Couleur</label>
                    <select value={this.state.color} onChange={this.handleColor}>
                        {

                            this.state.colors.map((color, index) => {

                            return <option key={index} value={color}>{color}</option>
                            })
                        }
                    </select>

                </div>

                <div>
                    <label>Commentaire</label>
                    <textarea value={this.state.comment} onChange={this.handleComments}></textarea>

                    <button>Validez</button>

                </div>

                

            </form>
        </div>
        )
    }
}

export default Form;