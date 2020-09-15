import React, { Component } from 'react'

class ChildComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {

           
             
        }
        console.log(`je suis dans le Constructor ENFANT`);
    }
    componentDidMount(){

        console.log(` je suis Componentdidmount ENFANT`);
}
    
    
    render() {
        console.log(`je suis dans le RENDER ENFANT`)
        return (
            <div>
                { console.log(`je suis dans le MISE JOUR ENFANT`)}
                hello
            </div>
        )
    }
}

export default ChildComponent
