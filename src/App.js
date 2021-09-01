import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Api } from './api/Api';
import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Login } from './Components/Login/Login';
import { UserStorage } from './userContext';

function App() {
  return (
    /* <div><Api /></div> */
    <div>
      <BrowserRouter>
      <UserStorage >
          <Header />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
