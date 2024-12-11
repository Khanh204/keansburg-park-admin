import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import Dashboard from './components/pages/dashboard';
import Customer from './components/pages/customer';
// import Login from './components/auth/login';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <div id="loader"></div>
    <div className="main-wrapper">
      <Header></Header>
      <Sidebar></Sidebar>

      <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/customers' element={<Customer/>}/>
     {/* <Route path='/login' element={<Login/>}/> */}

        </Routes>


      </div>
      </div>
  );
}

export default App;
