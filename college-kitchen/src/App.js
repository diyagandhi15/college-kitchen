import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import React from 'react';
import Home from './home';
import SignIn from './googleSignIn';
import Write from "./components/Write";
import Read from "./components/Read";
import Update from "./components/Update";

// for some reason whenever i try to add the google sign in 
//button i get node module dependency errors :(( 
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);
 
  return (
    <div className="App">
      <h1> College Kitchen </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/home" element={<Home />} /> {/* Route for Home */}
          <Route path="/write" element={<Write/>}/>
          <Route path="/read" element={<Read/>}/>
          <Route path="/update" element={<Update/>}/>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
