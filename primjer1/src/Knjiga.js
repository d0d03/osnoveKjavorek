import React, { Component, useState, } from "react"; 
// class Knjiga extends Component { 
//     state = { 
    //     knjiga: "Heidi", 
    //     jezik: "hrvatski", 
    //     izdanje: 5,
    // }; 
//     drugaKnjiga = () => { 
        // this.setState({ knjiga: "Emil i detektivi",}); 
        // }; 
//     novoIzdanje = () => { 
        //     this.setState((prevState) => ({ 
        //         izdanje:prevState.izdanje + 1, 
        //     })); 
        // }; 
// promjenaJezika = (jezik) => {this.setState({ jezik, }); }; 
//     render() { 
//         const { jezik, izdanje } = this.state; 
//         return ( <> <div> <h3>Knjiga: {this.state.knjiga}</h3>
//                 <h3>Jezik: {jezik}</h3> <h3>Izdanje: {izdanje}</h3> </div> 
//                 <button
//                 onClick={this.drugaKnjiga}> Druga knjiga</button> 
//                 <button onClick={this.novoIzdanje}> Novo izdanje</button> 
//                 <button onClick={() => this.promjenaJezika("engleski")}> Promjena jezika </button> </> );
//     } 
// } 

const Knjiga = () => {

    const [knjiga,setKnjiga] = useState("Heidi");
    const [jezik,setJezik] = useState("hrvatski");
    const [izdanje,setIzdanje] = useState(5);

    return(
        <> 
        <div> 
            <h3>Knjiga: {knjiga}</h3>
            <h3>Jezik: {jezik}</h3> 
            <h3>Izdanje: {izdanje}</h3> 
        </div> 
        <button onClick={() => setKnjiga("Emil i detektivi")}> Druga knjiga</button> 
        <button onClick={()=>setIzdanje(izdanje+1)}> Novo izdanje</button> 
        <button onClick={() => setJezik("engleski")}> Promjena jezika </button> </>
    )
}

export default Knjiga;