import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ActivatePage from './pages/ActivatePage';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import Login from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Register from './pages/RegisterPage';
import ResetPasswordConfirmPage from './pages/ResetPasswordConfirmPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import TaxCalculatorPage from './pages/TaxCalculatorPage';

function App() {
  return (
    <Layout>
      <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/contacts' element={ <ContactsPage /> } />
          <Route path='/profile' element={ <ProfilePage /> } />
          <Route path='/tax-calculator' element={ <TaxCalculatorPage /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='/reset-password' element={ <ResetPasswordPage /> } />
          <Route path='/password/reset/confirm/:uid/:token' element={ <ResetPasswordConfirmPage /> } />
          <Route path='/activate/:uid/:token' element={ <ActivatePage /> } />
      </Routes>
    </Layout>
  );
}

export default App;
