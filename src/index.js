import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/index.css';
import HomePage from './componets/homePage';
import IndiGamePage from './componets/indiGamePage';
import NavBar from './componets/navbar';
import Footer from './componets/Footer';
import ContactPage from './componets/contactPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavBar/>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/indiGame' element={<IndiGamePage/>}/>
      <Route exact path='/contact' element={<ContactPage/>}/>
    </Routes>
  <Footer/>  
  </BrowserRouter>
);


