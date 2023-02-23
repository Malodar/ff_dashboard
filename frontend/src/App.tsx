import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={ <HomePage /> } />
        <Route path='/contacts' element={ <ContactsPage /> } />
        <Route path='/profile' element={ <ProfilePage /> } />
      </Routes>
    </>
  );
}

export default App;
