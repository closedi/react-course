import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import {Header} from "./components/header/Header";
import {Side} from "./components/side/Side";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";


function App() {
 return (
   <BrowserRouter>
     <div className="container block-shadow">
       <Header />
       <Side />
       <Route path={'/dialogs'} component={Dialogs}/>
       <Route path={'/profile'} component={Profile}/>
     </div>
   </BrowserRouter>
 )
}

export default App;
