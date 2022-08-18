
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BasicSelect from './Component/BasicSelect';
import ButtonAppBar from './Component/ButtonAppBar';
import ResponsiveGrid from './Component/BasicTable';
import Sidebar from './Component/Sidebar';
import Login from './Controller/Login/Login';
import HomePage from './HomePage'

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   {/* <Route path="/login" element={<Login />}></Route> */}
    //   {/* <Route path="/" element={<HomePage />}></Route> */}
    // </Routes>
    
    // </BrowserRouter>
    <Login />
  );
}

export default App;
