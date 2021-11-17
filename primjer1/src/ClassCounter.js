import React from 'react';
import { Component } from 'react';

export default class ClassCounter extends Component{


    state={
        count: 0
    }

    dodajJedan = () => {
        this.setState(prevState =>({

            count: prevState.count + 1
        }))
    }


    oduzmiJedan = () => {
        this.setState(prevState =>({

            count: prevState.count - 1
        }))
    }

    reset = () => {
        this.setState(() =>({
            count: 0
        }))
    }

    render(){
        return(
            <>
                <p>Counter: {this.state.count}</p>
                <button onClick={this.dodajJedan}>+</button>
                <button onClick={this.oduzmiJedan}>-</button>
                <button onClick={this.reset}>Reset</button>
            </>
        )
    }
}