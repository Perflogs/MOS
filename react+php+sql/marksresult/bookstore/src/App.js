import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import{Route,Routes,BrowserRouter} from 'react-router-dom';
import {Home} from './pages/home';
import {Login} from './pages/login';
import { Catalogue } from './pages/catalogue';
import { Registration } from './pages/registration';
import { NavBar } from './layout/navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<></>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/catalogue" element={<Catalogue />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
