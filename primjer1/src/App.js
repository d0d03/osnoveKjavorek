
import React, { useState } from 'react';
import {BrowserRouter, Route, Routes, Switch, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import './Countdown';
import Countdown from './Countdown';
import Car from './Car';
import Person from './Person';
import HooksExample from './HooksExample';
import Namirnica from './Namirnica';
import ClassCounter from './ClassCounter';
import HookCounter from './HookCounter';
import Knjiga from './Knjiga';

function App() {

  // const [broj, setBroj] = useState(10);
  // const element = (
  //   <div>
  //     <h1>Prozivoljni sadržaj</h1>
  //     <h2>{broj}</h2>
  //   </div>
  // );
  // const tekst = "Proizvoljni tekst";

  // return(
  //   <div>
  //     {/* {broj > tekst.length ? element : <div>{tekst.length}</div>}
  //     <button onClick={()=>setBroj(tekst.length + 1)}>Prikaži</button>
  //     <button onClick={()=>setBroj(tekst.length - 1)}>Sakrij</button> */}
  //     {/* <Countdown /> */}
  //     {/* <Car/> */}
  //     {/* <Person/>
  //     <HooksExample /> */}
  //     <Namirnica />
  //     <ClassCounter/>
  //     <HookCounter />
  //     <Knjiga />
  //   </div>
  // )
  return(
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Car />}/>
        <Route path="/counter" element={<HookCounter/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
