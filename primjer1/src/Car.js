import React, {Component} from 'react';

import CarDetails from './CarDetails';

export default class Car extends Component{


    state = {
        marka: "Renault",
        model: "Clio",
        motor: "1.5 DCI",
        kilometraza: 190000,
        potrosnja: 5
    }
    handleClick = () =>{
        const { model, motor,marka, kilometraza,potrosnja} = this.state;

        alert(
            `Marka automobila: ${marka},
            \nModel automobila: ${model}
            \nMotor automobila: ${motor}
            \nPrijeđeni kilometri: ${kilometraza}
            \Potrosnja automobila: ${potrosnja} l/km`);
    }

    handleChange = () =>{
        const newV = 5;
        const oldV = 10;
        let potrosnja = this.state.potrosnja === newV ? oldV : newV;
        this.setState({
            potrosnja
        })

    }

    handleLeave = (km) =>{
        console.log(km);
        this.setState({
            kilometraza: km
        })
    }

    render(){
        const { model, motor,marka, kilometraza,potrosnja} = this.state;
        return(
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <br></br>
                <button onDoubleClick={this.handleChange}>Click me baby one more time</button>
                <br></br>
                <button onMouseLeave={()=>this.handleLeave(200000)}>Leave me alone</button>

                <CarDetails tekst="Detalji auta" {...this.state} promjeni={this.handleChange}>
                    <strong>Nesto</strong>
                </CarDetails>
            </div>
        );
    }

}