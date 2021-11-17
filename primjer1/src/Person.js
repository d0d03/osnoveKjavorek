import React, {Component} from 'react';

import List from './List';

export default class Person extends Component{

    state = {
        hobbies: ["gitara", "trčanje", "dresiranje pasa"],
        countries :[ "Hrvatska", "Njemačka"]
    }

    render(){
        return(
            <div>
                PERSON
                <List listName={"Lista hobija"} items={this.state.hobbies}/>
                <div>________________</div>
                <List listName={"Lista država"} items={this.state.countries}/>
            </div>
        )
    }
}