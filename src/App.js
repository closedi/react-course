import React from 'react'
import './App.css';
import {Header} from "./components/header/Header";
import {Side} from "./components/side/Side";
import {Main} from "./components/main/Main";

function App() {
 return (
     <div className="container block-shadow">
       <Header />
       <Side />
       <Main />
     </div>
 )
}

export default App;
