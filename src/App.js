import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm/LoginForm';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<LoginForm />} />
    </Routes>
  );
}

export default App;


