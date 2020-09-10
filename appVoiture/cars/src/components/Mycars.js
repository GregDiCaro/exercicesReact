import React, {Component, Fragment} from 'react';
import Car from './Cars';

class Mycars extends Component {

     state = {

        voitures: [{name: 'ford' , color:'blue', year:'2010'},
                  {name: 'mercedez' , color:'red', year:'2020'},
                
                  {name: 'pigeot' , color:'green', year:'2009'}
        ],

        titre :'Mon Catalogue Voiture 2'
     }

    addTenYears = () => {
        
        const updatedState = this.state.voitures.map((param) =>{

            return param.year -= 10 ;
        })

        this.setState({

            updatedState
        })
    }
    render(){

        const year = new Date().getFullYear();
        
        return (

           <Fragment>
                <h1 >{this.state.titre} </h1>

                <button onClick={this.addTenYears}> +10 ans </button>

                <table className="cars">
                <tr>

                    <th>Marque</th>
                    <th>Age</th>
                    <th>couleur</th>
                </tr>
                {

                this.state.voitures.map((voiture,index) => {

                    return(

                        <Fragment key={index}>
                                 <Car  nom={voiture.name} color={voiture.color} year={year - voiture.year + ' ans'} />

                        </Fragment>

                       

                    )
                })
            }

        </table>
</Fragment>
        )
    }
}

export default Mycars;