// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import LoginForm from './pages/LoginForm/LoginForm';
// import SignUp from './pages/SignUp/SignUp';

// function App() {
//   return (
//     <Routes>
//       <Route path="/loginform" element={<LoginForm />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/" element={<LoginForm />} />
//     </Routes>
//   );
// }

// export default App;


import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import LoginForm from './pages/LoginForm/LoginForm';

function App() {
  return (
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
  );
}

export default App;
