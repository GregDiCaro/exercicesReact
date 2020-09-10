import React, {Component} from 'react';
import Users from './Singers';

class Display extends Component {

    render(){
        return(

            <div>
                <h1>Musiciens: </h1>
                <Users name="eric clapton" age="74"/>
                <Users name="Jim" age="24"/>
                <Users name="David" age="75"/>
                <Users name="carlos santan" age="60"/>
            </div>
        )
    }
}

export default Display;