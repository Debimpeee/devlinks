import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
// import FrameTwo from './pages/FrameTwo/FrameTwo';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/frameTwo" element={<FrameTwo />} /> */}
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/preview" element={<Preview />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { Routes, Route } from 'react-router-dom';
// // import Login from './pages/Login/Login';
// // import SignUp from './pages/SignUp/SignUp';
// import Home from './pages/Home/Home';
// // import LoginForm from './pages/LoginForm/LoginForm';

// function App() {
//   return (
//       <Routes>
//         {/* <Route path="/login" element={<Login />} /> */}
//         {/* <Route path="/signup" element={<SignUp />} /> */}
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/" element={<LoginForm />} /> */}
//       </Routes>
//   );
// }
