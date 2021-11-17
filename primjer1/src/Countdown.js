import React, {Component} from 'react';

import TodayDate from './TodayDate';

export default class Countdown extends Component{

    state = {
        date: new Date(),
        label: "timer ",
        minutes: 5,
        seconds: 0,
    }

    componentDidMount(){
        this.setState({
            minutes: 5,
            seconds : 5
        })
        setInterval(()=>{
            const current = this.state.minutes;
            const currentSeconds = this.state.seconds
            if(currentSeconds > 0)
            {
                this.setState({
                    seconds: currentSeconds - 1
                })
            }
            else if(current > 0){
                this.setState({
                    minutes: current-1,
                    seconds: 5
                })
            }else{
                this.setState({
                    label:"pls reset! "
                })
            }
        },1000)  
    }


    handleClick = () =>{
        if(this.state.minutes > 0)
        this.setState(prevState => ({
            minutes: prevState.minutes - 1
        }))
    }

    handleReset = () =>{
        this.setState(() =>({
            minutes: 2,
            seconds: 59,
            label: "Timer "
        }))
    }

    render(){
        //dulji nacin
        const minute = this.state.minutes;
        const sekunde = this.state.seconds;
        //kraci
        const {minutes, seconds} = this.state;

        return(
            <div>
                Final Countdown
                <h2>Date: {this.state.date.toLocaleDateString("hr-HR")}</h2>
                <h3>
                    {this.state.label}
                    {`${minutes} : ${seconds}`}
                </h3>
                <button onClick = {this.handleClick}>Change minutes</button>
                <button onClick = {this.handleReset}>Reset</button>
                <br></br>
                <TodayDate {...this.state} resetiraj={this.handleReset}>
                    <div>
                        <p>
                            Child element
                        </p>
                    </div>
                </TodayDate>
            </div>
        );
    }    
}