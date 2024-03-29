import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Api } from './api/Api';
import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { ProtectedRoute } from './Components/Helper/ProtectedRoute';
import { Home } from './Components/Home';
import { Login } from './Components/Login/Login';
import Photo from './Components/Photo/Photo';
import { User } from './Components/User/User';
import UserProfile from './Components/User/UserProfile';
import NotFound404 from './NotFound404';
import { UserStorage } from './userContext';

function App() {
  return (
    /* <div><Api /></div> */
    <div className="App">
      <BrowserRouter>
      <UserStorage >
          <Header />
          <main className="AppBody">
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRoute path="conta/*" element={<User />}/>
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound404 />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
