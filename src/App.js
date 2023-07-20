import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './Component/Main/landing';
import Register from './Component/Register/Registration';
import Login from './Component/Login/Login.js';
import Logout from './Component/logout/logout.js';
import { BrowserRouter, Routes , Route } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
     <Route path='/' element={[<Landing/>]} ></Route>
     <Route path='/Register' element={[<Register/>]} ></Route>
     <Route path='/Login' element={[<Login/>]} ></Route>
     <Route path='/Logout' element={[<Logout/>]} ></Route>



     </Routes>
     </BrowserRouter>
     </>
  );
}
export default App;
