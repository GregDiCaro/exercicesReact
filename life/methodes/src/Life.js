import React,{ Component }from 'react';



class Life extends Component {
       
    constructor(props) {
        super(props);
        
            this.state = {
                 
                name: 'toto',
                step: 1

            }
                
            console.log(`etape ${this.state.step} : je suis dans le constructor`);
        }

        componentDidMount(){

                console.log(`etape ${this.state.step} : je suis Componentdidmount`);

                this.setState ({
                 
                    name: this.props.name,
                    step: this.state.step +1
    
                })

                console.log(`etape ${this.state.step} : SETSTATE je suis Componentdidmount`);
        }


        componentDidUpdate(prevProps, prevState){

            console.log(`etape ${this.state.step} : SETSTATE je suis ComponentdDIDUDATE`);
            console.log(prevState);
            console.log(this.state);
        }
        componentWillUnmount() {
            
            console.log(`etape ${this.state.step} : je suis COMPONENTWILLUNMOUNT`);
        }
        

        render(){
            console.log(`etape ${this.state.step}: je suis de le render`);
            return(

                <div className="borderBox">
                    {console.log(`etape ${this.state.step} : mise a JOUR DOM`)}
                    <p>Chargement: {this.state.step}</p>
                    <p>Nom: {this.state.name}</p>

                   
                </div>
            )

        }
        

    }


export default Life
