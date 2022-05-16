import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './style/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<App />}></Route>
        <Route path="/gallery" element = {<Gallery />}></Route>
        <Route path="/about" element = {<About />}></Route>
        
        <Route path="/login" element = {<Login />}></Route>
        <Route path="/signup" element = {<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);